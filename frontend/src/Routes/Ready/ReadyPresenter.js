import React from 'react';
import Remon from "@remotemonster/sdk";
import Axios from "axios";
import * as tf from '@tensorflow/tfjs';

import "./Ready.css";
import { Container, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      	flexGrow: 1,
    },
    paper: {
        margin:theme.spacing(1),
      	padding: theme.spacing(5),
      	textAlign: 'center',
      	color: theme.palette.text.secondary,
    },
}));
const ReadyPresenter = ({roomNumber})=> {
    const classes = useStyles();

    return(
        <Container maxwidth="sm">
            <div class Name="roomtitle"><h1> '{roomNumber}' 방</h1></div>
            <div className="othervideos" id="otherVideos"></div>
            <Paper className={classes.paper}>
                <div className="timer" id="timer">00m00s</div>
                <div className="timerpath"></div>
                <button className="startbutton" id="enterBtn">Enter</button>
            </Paper>
            
            <Grid container spacing={5}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <video id="myVideo" className="remote-video" autoPlay muted controls playsInline></video>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        Focustudy의 AI 분석 코멘트
                        <div className="ment" id="facenum"></div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
export default ReadyPresenter;