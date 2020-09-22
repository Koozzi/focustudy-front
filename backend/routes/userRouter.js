const router = require('express').Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const aws = require('aws-sdk');
const sesTransport = require('nodemailer-ses-transport');

const User = require("../models/userModel");
const auth = require("../middleware/auth");


router.get("/verify", async(req, res) => {
    try{
        const key_one = crypto.randomBytes(256).toString('hex').substr(100,5);
        const key_two = crypto.randomBytes(256).toString('base64').substr(50, 5);
        const key_for_verify = key_one + key_two;


        let { toEmail } = req.query;
        console.log(toEmail);
        if(!toEmail){
            return res.status(404).json({msg: "이메일을 입력해 주세요."});
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'team.focustudy@gmail.com',
                pass: 'rnclgns1!'
            }
        })

        const mailOptions = {
            from: 'team.focustudy@gmail.com',
            to: toEmail,
            subject: '환영합니다. 세상에 없던 AI 집중력 타이머, FocuStudy입니다.',
            html: `
                <h1>FocuStudy</h1>
                <h3>아래의 인증 번호를 입력해주세요.</h3>
                인증 번호 : ${key_for_verify}
            `
        };

        var sesTransporter = nodemailer.createTransport(sesTransport({
            accessKeyId: 'AKIAU4UJS4NBTXQWNH4N',
            secretAccessKey: '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',
            region: 'ap-northeast-2'
        }));

        await sesTransporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log(error);
            } else {
                console.log('Email Sent!');
            }
            transporter.close();
        })

        res.json({
            exist: false,
            toEmail: toEmail,
            verifyCode: key_for_verify
        });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
})
router.post("/register", async(req, res) => {
    try {
        let {email, password, passwordCheck, displayName} =  req.body;

        if(!email || !password || !passwordCheck || !displayName){
            return res.status(404).json({msg: "모든 항목을 채워주세요.😭"})
        }

        if(password.length < 8){
            return res.status(400).json({msg: "비밀번호는 8자리 이상으로 해주세요.😭"})
        }

        if(password !== passwordCheck){
            return res.status(400).json({msg: "비밀번호가 일치되지 않아요.😭"})
        }

        const existingUser = await User.findOne({email: email});
        if(existingUser){
            return res.status(400).json({msg: "해당 이메일으로 이미 가입이 되어 있어요.😭"})
        }

        const existingDisplayName = await User.findOne({displayName: displayName});
        if(existingDisplayName){
            return res.status(400).json({msg: "해당 이름으로 이미 가입이 되어 있어요.😭"})
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: passwordHash,
            displayName
        });

        const saveUser = await newUser.save();
        res.json(saveUser);
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
})
router.post("/login", async(req, res) => {
    try{
        const { email, password } = req.body;
        
        // Validation
        if(!email || !password){
            return res.status(400).json({msg: "Not all fields have been entered."})
        }

        const user = await User.findOne({ email: email });
        if(!user){
            return res.status(400).json({msg: "No account with this email has been registerd."});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg: "Invalid credential"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
            },
        });
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
})
router.delete("/delete", auth, async(req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.user);
        res.json(deleteUser);
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
})
router.post("/tokenIsValid", async(req, res)=>{
    try{
        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if(!user) return res.json(false);

        return res.json(true)
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
})
router.get("/", auth, async(req, res)=> {
    const user = await User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id
    });
})
module.exports = router;