import React, { Component } from 'react';
import { Container} from '@material-ui/core';
import "./Ready.css";
const ReadyPresenter = ({roomNumber})=> (
  <Container maxwidth="sm">
    <div className="roomtitle"><h1> {roomNumber} </h1></div>
    <div className="othervideos" id="otherVideos"></div>
    <div className="timerbackground">
      <div className="timer" id="timer">00m00s</div>
      <div className="timerpath"></div>
      <button className="startbutton" id="enterBtn" href="#">ENTER</button>
    </div>
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