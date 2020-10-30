import React, { Component } from 'react';
import { Container} from '@material-ui/core';
import "./Ready.css";
const ReadyPresenter = ({roomNumber})=> (
  <Container maxwidth="sm">
    <div className="roomtitle"><h1> {roomNumber} </h1></div>
    <button className="startbutton" id="enterBtn" href="#">ENTER</button>
    <div className="othervideos" id="otherVideos"></div>
    <div className="timer" id="timer">Pomodoro</div>

    <div className="row">
      <div className="column">
        <video id="myVideo" className="remote-video" autoPlay muted controls playsInline></video>
      </div>
      <div className="column">
        <div> My message is <div id="facenum"></div></div>
      </div>
    </div>
  </Container>
);
export default ReadyPresenter;