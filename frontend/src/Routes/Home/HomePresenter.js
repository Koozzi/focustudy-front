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
                <source src="https://youtu.be/jnLSYfObARA?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E" type="video/mp4"/>
                <strong>Your browser does not support the video tag</strong>
            </video>
            <div class="header">
                <div class="up-logo"><div class="logo-link">DSC UOS</div></div>
            </div>
            <ul class="btns">
                <li class="left-btn">
                    <em>Frontend</em>
                    <div class="btn-letter">프론트엔드</div>
                    <div class="rectangle">바로가기</div>
                </li>
                <li class="right-btn">
                    <em>Backend</em>
                    <div class="btn-letter">백엔드</div>
                    <div class="rectangle">바로가기</div>
                </li>
            </ul>
            <p class="slogan">Connectiong the Dots</p>
        </div>
        </React.Fragment>
        
        
      );
}

export default Home;