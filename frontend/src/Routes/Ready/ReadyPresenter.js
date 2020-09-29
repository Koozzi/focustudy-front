import React, { Component } from 'react';
import { Container} from '@material-ui/core';
import "./Ready.css";
const ReadyPresenter = ({roomNumber})=> (
  <Container maxwidth="sm">
    <h1>공부를 그만하다니, 인성문제 있어? <button className="startbutton" id="enterBtn" href="#">ENTER</button></h1>
    <div className="roomtitle"><p>You entered in Room {roomNumber} </p></div>
    <div className="row">
      <div className="column">
        <div className="timer" id="timer">Pomodoro</div>
      </div>
      <div className="column">
        <div> Your Pomodoro score is <div id="facenum"></div></div>
        <video id="myVideo" className="remote-video" autoPlay muted controls playsInline></video>
      </div>
    </div>
    <div className="othervideos" id="otherVideos"></div>
    <canvas id="myChart"></canvas>
  </Container>
);
export default ReadyPresenter;