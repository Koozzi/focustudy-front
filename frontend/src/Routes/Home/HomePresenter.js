import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "./Home.css";
import homeimage from "./assets/home.jpg";
import Header from "../../Components/Header";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <div class="frame">
            <img id="backvid" src={homeimage}></img>
            <Header />
            <div class="header">
                <div class="up-logo"><div class="logo-link">Focustudy</div></div>
            </div>
            <Container>
            <ul class="btns">
                <li class="left-btn">
                    <em>Single Mode</em>
                    <div class="btn-letter">싱글모드</div>
                    <Link to={"/focus/study"}><button class="rectangle">바로가기</button></Link>
                </li>
                <li class="right-btn">
                    <em>Multi Mode</em>
                    <div class="btn-letter">멀티모드</div>
                    <Link to={"/focus/study"}><button class="rectangle">바로가기</button></Link>
                </li>
            </ul>
            <p class="slogan">세상에 없던 AI 집중력 타이머</p>
            </Container>
        </div>
        </React.Fragment>
        
        
      );
}

export default Home;