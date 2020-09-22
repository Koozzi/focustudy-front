import React, {useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import UserContext from '../../Components/UserContext';
import ErrorNotice from '../../Components/ErrorNotice';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function RegisterPresenter() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [verifyCode, setVerifyCode] = useState();
    const [typeVerifyCode, setTypeVerifyCode] = useState();
    const [isCodeEqual, setIsCodeEqual] = useState(false)
    const [sentEmail, setSentEmail] = useState(false);
    const [checkedCode, setCheckedCode] = useState(false);
    const [error, setError] = useState();
    const classes = useStyles();
    const {setUserData} = useContext(UserContext);

    const history = useHistory();

    const verifyEmail = async(e) => {
        e.preventDefault();
        const userEmail = { email };
        const verify = await Axios({
            method: 'get',
            url: 'http://15.165.172.0:5050/users/verify',
            // url: 'http://localhost:5050/users/verify',
            params: {
                toEmail: userEmail
            }
        })

        console.log(verify.data.verifyCode);
        setVerifyCode(verify.data.verifyCode);
        setSentEmail(true);
    }

    const compareCode = async(e) => {
        console.log("After Send Email : ", sentEmail);
        e.preventDefault();
        setCheckedCode(true);
        if(typeVerifyCode == verifyCode){
            await setIsCodeEqual(true);
        } else {
            setIsCodeEqual(false);
        }
    }

    const VerifyCheckButton = () => {
        if(sentEmail){
            if(!checkedCode){
                return (<>
                    {/* <VerifyInput /> */}
                    <Button type="submit" variant="contained" color="primary">인증하기</Button>
                </>)
            } else {
                if(isCodeEqual){
                    return (<>
                        <Button type="submit" variant="contained" disabled color="primary">인증완료</Button>
                    </>)
                } else {
                    return (<> 
                        {/* <VerifyInput /> */}
                        <Button type="submit" variant="contained" color="secondary">인증하기</Button>
                        <br/>
                        인증번호를 확인해주세요.
                    </>)
                }
            }
        } else {
            return (<>
                {/* <VerifyInput /> */}
                <Button type="submit" variant="contained" disabled color="primary">인증하기</Button>
            </>)
        }
    }

    const registerSubmit = async(e) => {
        e.preventDefault();
        try{
            const newUser = {email, password, passwordCheck, displayName};
            await Axios.post(
                // "http://15.165.172.0:5050/users/register",
                "http://localhost:5050/users/register",
                newUser
            ); // 생성
            const loginUser = {email, password};
            const loginRes = await Axios.post(
                // "http://15.165.172.0:5050/users/login",
                "http://localhost/users/login",
                loginUser
            ); // 새로 생성하면 자동으로 로그인이 되게끔.
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        }
        catch(err){
            // err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (
        <div>
            <form onSubmit={verifyEmail} className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Email"
                    placeholder="email@example.com"
                    inputProps={{ 'aria-label': 'description' }}
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                {sentEmail ? (
                    <Button type="submit" variant="contained" color="primary">다시 보내기</Button>
                ) : (
                    <Button type="submit" variant="contained" color="primary">인증 번호 보내기</Button>
                )}
            </form>
            <form onSubmit={compareCode} className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="인증번호"
                    placeholder="인증번호"
                    inputProps={{ 'aria-label': 'description' }}
                    type="password"
                    onChange={e => setTypeVerifyCode(e.target.value)}
                />              
                <VerifyCheckButton />
            </form>
            <form onSubmit={registerSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Username"
                    placeholder="Username"
                    inputProps={{ 'aria-label': 'description' }}
                    type="text"
                    onChange={e => setDisplayName(e.target.value)}                
                /><br/>
                <TextField
                    id="standard-basic"
                    label="비밀번호"
                    placeholder="비밀번호"
                    inputProps={{ 'aria-label': 'description' }}
                    type="password"
                    onChange={e => setPassword(e.target.value)}                    
                /><br />
                <TextField
                    id="standard-basic"
                    label="비밀번호 확인"
                    placeholder="비밀번호 확인"
                    inputProps={{ 'aria-label': 'description' }}
                    type="password"
                    onChange={e => setPasswordCheck(e.target.value)}                
                /><br />
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                <Button type="submit" variant="contained" color="primary">가입하기</Button>
            </form>
        </div>
    )
}
