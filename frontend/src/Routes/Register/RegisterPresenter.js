import React, {useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import UserContext from '../../Components/UserContext';
import ErrorNotice from '../../Components/ErrorNotice';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      title: {
        textDecoration: 'none',
        color: 'black'
      },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            
        },
        width: '100%',
        marginRight: 11,
        marginTop:10,
        marginBottom:10,
        
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2d3436"
        },
        "& .MuiOutlinedInput-input": {
          color: "#2d3436"
        },
        "& .MuiInputLabel-outlined": {
          color: "#2d3436"
        },
    },
    emailForm: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2d3436"
        },
        "& .MuiOutlinedInput-input": {
          color: "#2d3436"
        },
        "& .MuiInputLabel-outlined": {
          color: "#2d3436"
        },
    },
    emailSubmit: {
        
        marginTop:10,
        marginBottom:10,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 20,
        backgroundColor: '#2d3436',
        '&:hover':{
          backgroundColor: '#2d3436',
        }
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 17.5,
        backgroundColor: '#2d3436',
        '&:hover':{
          backgroundColor: '#2d3436',
        }
    }
    ,
    beforeVerify: {
        margin: theme.spacing(1.2, 0, 2),
        paddingTop: 12,
        paddingBottom: 12,
        color: 'white',
        fontSize: 17.5,
        backgroundColor: '#2d3436',
        '&:hover':{
          backgroundColor: '#2d3436',
        }
    },
    completeVerify: {
        margin: theme.spacing(1.2, 0, 2),
        paddingTop: 12,
        paddingBottom: 12,
        
        fontSize: 17.5,
        backgroundColor: '#b2bec3',
        '&:hover':{
            backgroundColor: '#b2bec3',
        }
    },
    failVerify: {
        margin: theme.spacing(1.2, 0, 2),
        paddingTop: 12,
        paddingBottom: 12,
        color: 'white',
        fontSize: 17.5,
        backgroundColor: '#d63031',
        '&:hover':{
            backgroundColor: '#d63031',
        }
    },

    Login: {
        fontSize: 35,
        fontWeight: 1000,
        marginBottom: 40
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
    const [open, setOpen] = useState(false);

    const [existDisplayName, setExistDisplayName] = useState(false);
    const [existEmail, setExistEmail] = useState(false);
    const [passwdCheck, setPasswdCheck] = useState(true); // 패스워드 일치함.
    const [passwdLength, setPasswdLength] = useState(true);

    const classes = useStyles();
    const {setUserData} = useContext(UserContext);

    const history = useHistory();

    const verifyEmail = async(e) => {
        e.preventDefault();
        

        const userEmail = { email };

        const existUser = await Axios.post(
            'https://focustudy-back.site/users/exist_email',
            {
                toEmail: userEmail.email
            }
        )
        if(existUser.data){
            setExistEmail(true);
            return;
        }
        else {
            setExistEmail(false);
            setOpen(true);
            const verify = await Axios({
                method: 'get',
                url: 'https://focustudy-back.site/users/verify',
                params: {
                    toEmail: userEmail
                },
            })

            console.log(verify.data.verifyCode);
            setVerifyCode(verify.data.verifyCode);
            setSentEmail(true);
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    const compareCode = async(e) => {
        console.log("After Send Email : ", sentEmail);
        e.preventDefault();
        setCheckedCode(true);
        if(typeVerifyCode == verifyCode){
            setIsCodeEqual(true);
            setOpen(false);
        } else {
            setIsCodeEqual(false);
        }
    }

    const VerifyCheckButton = () => {
        if(sentEmail){
            if(!checkedCode){
                return (<>
                    {/* <VerifyInput /> */}
                    <Button className={classes.beforeVerify} type="submit" variant="contained">인증하기</Button>
                </>)
            } else {
                if(isCodeEqual){
                    return (<>
                        <Button className={classes.completeVerify} type="submit" variant="contained" disabled>인증완료</Button>
                    </>)
                } else {
                    return (<> 
                        {/* <VerifyInput /> */}
                        <Button className={classes.failVerify} type="submit" variant="contained">인증하기</Button>
                        <br/>
                        인증번호를 다시 한 번 확인해주세요.
                    </>)
                }
            }
        } else {
            return (<>
                {/* <VerifyInput /> */}
                <Button className={classes.beforeVerify} type="submit" variant="contained" disabled color="primary">인증하기</Button>
            </>)
        }
    }

    const registerSubmit = async(e) => {
        e.preventDefault();
        try{

            const newUser = {email, password, passwordCheck, displayName};

            const existUser = await Axios.post(
                "https://focustudy-back.site/users/exist_displayName",
                {
                    displayName: displayName
                }
            )
            console.log(existUser);
            if(existUser.data){
                setExistDisplayName(true);
                return;
            }

            if(password !== passwordCheck){
                setExistDisplayName(false);
                setPasswdCheck(false);
                return;
            }

            if(password.length < 8){
                setExistDisplayName(false);
                setPasswdCheck(true);
                setPasswdLength(false);
                return;
            }

            await Axios.post(
                "https://focustudy-back.site/users/register",
                // "http://localhost:5050/users/register",
                newUser
            ); // 생성
            const loginUser = {email, password};
            const loginRes = await Axios.post(
                "https://focustudy-back.site/users/login",
                // "http://localhost/users/login",
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

    const SendEmailButton = () => {
        if(sentEmail){
            if(isCodeEqual){
                return(
                    <Button className={classes.emailSubmit} type="submit" fullWidth variant="contained" disabled color="primary">인증완료</Button>
                )
            } else {
                return(
                    <Button className={classes.emailSubmit} type="submit" fullWidth variant="contained" color="primary">다시 보내기</Button>
                )
            }
        } else {
            return(
                <Button className={classes.emailSubmit} type="submit" fullWidth variant="contained" color="primary">인증 코드 보내기</Button>
            )
        }
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Typography className={classes.Login} component="h1" variant="h5">
                <a className={classes.title} href="/">FocuStudy</a>
            </Typography>
            
            <form onSubmit={verifyEmail} className={classes.emailForm} noValidate>
                {isCodeEqual ? (
                    <TextField
                    disabled
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    id="standard-basic"
                    autoComplete="email"
                    label="이메일 주소"
                    autoFocus
                    inputProps={{ 'aria-label': 'description' }}
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                ) : (
                    <TextField
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    id="standard-basic"
                    autoComplete="email"
                    label="이메일 주소"
                    autoFocus
                    inputProps={{ 'aria-label': 'description' }}
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                )}
                <SendEmailButton />
                {existEmail ? (
                    <>해당 이메일 주소로 이미 가입이 되어 있습니다.</>
                ) : (
                    <></>
                )}
            </form>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">이메일을 확인해주세요!</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    방금 {email}로 인증코드를 보냈습니다.
                </DialogContentText>
                <DialogContentText>
                    아래에 코드를 입력해주세요!
                </DialogContentText>
                <form onSubmit={compareCode} className={classes.form} noValidate autoComplete="off">
                    <TextField
                        variant="outlined"
                        id="standard-basic"
                        label="인증번호"
                        placeholder="인증번호"
                        inputProps={{ 'aria-label': 'description' }}
                        type="password"
                        onChange={e => setTypeVerifyCode(e.target.value)}
                    />              
                    <VerifyCheckButton />
                </form>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose} color="primary">
                        확인
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        취소
                    </Button> */}
                </DialogActions>
            </Dialog>

            <form onSubmit={registerSubmit} className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    id="standard-basic"
                    label="아이디"
                    inputProps={{ 'aria-label': 'description' }}
                    type="text"
                    fullWidth
                    onChange={e => setDisplayName(e.target.value)}                
                />
                <TextField
                    variant="outlined"
                    id="standard-basic"
                    fullWidth
                    label="비밀번호"
                    inputProps={{ 'aria-label': 'description' }}
                    type="password"
                    onChange={e => setPassword(e.target.value)}                    
                />
                <TextField
                    variant="outlined"
                    id="standard-basic"
                    label="비밀번호 확인"
                    fullWidth
                    inputProps={{ 'aria-label': 'description' }}
                    type="password"
                    onChange={e => setPasswordCheck(e.target.value)}                
                />
                {/* {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />} */}
                {passwdCheck ? (
                    <></>
                ) : (
                    <>비밀번호가 일치되지 않습니디.</>
                )}
                {existDisplayName ? (
                    <>해당 아이디는 이미 사용중입니다.</>
                ) : (
                    <></>
                )}
                {passwdLength ? (
                    <></>
                ) : (
                    <>비밀 번호는 8자리 이상으로 해주세요.</>
                )}
                <Button className={classes.emailSubmit}  fullWidth  type="submit" variant="contained" color="primary">회원가입</Button>
            </form>
        </div>
        </Container>
    )
}
