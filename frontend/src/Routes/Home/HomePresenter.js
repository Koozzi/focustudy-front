import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import "./Home.css";
import logo from "./assets/logo.PNG"
import logo2 from "./assets/logo2.PNG"
import backgroundvideo from "./assets/background.mp4"
import Header from "../../Components/Header"
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
        <Header />
        
        <div class="frame">
            <video id="backvid" muted autoplay loop>
                <source src={backgroundvideo} type="video/mp4"/>
                <strong>Your browser does not support the video tag.</strong>
            </video>
            <div class="header">
                <div class="up-logo"><div class="logo-link">Focustudy.</div></div>
            </div>
            <ul class="btns">
                <li class="left-btn">
                    <em>Single Mode</em>
                    <div class="btn-letter">싱글모드</div>
                    <div class="rectangle">바로가기</div>
                </li>
                <li class="right-btn">
                    <em>Multi Mode</em>
                    <div class="btn-letter">멀티모드</div>
                    <div class="rectangle">바로가기</div>
                </li>
            </ul>
            <p class="slogan">FocuStudy는 여러분을 항상 응원합니다. 세상에 없던 AI 집중력 타이머, 지금 바로 경험해보세요.</p>
        </div>
        </React.Fragment>
        
        
      );
}

export default Home;