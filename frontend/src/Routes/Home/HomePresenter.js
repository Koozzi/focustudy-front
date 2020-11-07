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
            
            <Container>
            <Header />
            <div className="header">
                <div className="up-logo"><div className="logo-link">Focustudy</div></div>
            </div>
            <ul className="btns">
                <li className="left-btn">
                    <em>Single Mode</em>
                    <div className="btn-letter">싱글모드</div>
                    <Link to={"/focus/study"}><button className="rectangle">바로가기</button></Link>
                </li>
                <li class="right-btn">
                    <em>Multi Mode</em>
                    <div className="btn-letter">멀티모드</div>
                    <Link to={"/focus/study"}><button className="rectangle">바로가기</button></Link>
                </li>
            </ul>
            <p class="slogan">세상에 없던 AI 집중력 타이머</p>
            </Container>
        </div>
        </React.Fragment>
        
        
      );
}

export default Home;