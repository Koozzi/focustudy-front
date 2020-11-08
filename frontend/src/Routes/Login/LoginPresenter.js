import React, {useState, useContext }from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../Components/UserContext';

// import ErrorNotice from '../../Components/ErrorNotice';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  submit: {
    margin: theme.spacing(3, 0, 2),
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 20,
    backgroundColor: '#2d3436',
    '&:hover':{
      backgroundColor: '#2d3436',
    }
  },
  Login: {
    fontSize: 35,
    fontWeight: 1000,
    marginBottom: 40
  },
}));

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isMatch, setIsMatch] = useState(true);
  // const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const RealSubmit = async(e) => {
    e.preventDefault();
    try{
        const loginUser = {email, password};
        const loginRes = await Axios.post(
            "https://focustudy-back.site/users/login",
            loginUser
        );
        if(!loginRes.data){
          setIsMatch(false);
          return;
        }

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

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.Login} component="h1" variant="h5">
          <a className={classes.title} href="/">FocuStudy</a>
        </Typography>
        {/* {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />} */}
        <form className={classes.form} noValidate onClick={RealSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일 주소"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          {isMatch ? (
            <></>
          ) : (
            <>"이메일"과 비밀번호를 확인해주세요.</>
          )}
          <Button
            type="RealSubmit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link to="/register">
                비밀번호를 잊으셨나요?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="/register">
                {"아직 계정이 없으신가요? 가입하기"}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}