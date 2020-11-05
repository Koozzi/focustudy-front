import * as React from "react";
import * as tf from '@tensorflow/tfjs';

const initJavis = () => {
    const enterBtn = document.querySelector("#enterBtn");
    const webcamElement = document.getElementById('myVideo');
    // const cocoSsd = require('@tensorflow-models/coco-ssd');
    const facenum = document.getElementById("facenum");
    
    const facemesh = require("@tensorflow-models/facemesh");
    var seconds = 0; 
    var minutes = 0;
    var face_cnt = 0;
    var time = 0;
    var data = new Array;
    var times = new Array;  
    var prev_keypoints=0;
    var Chart = require('chart.js');
    function speakstart(s){
        var msg = new SpeechSynthesisUtterance();
        msg.text = s;
        window.speechSynthesis.speak(msg);
    }
    async function inferencestart(){
        var contador = null;
        seconds = 1;
        contador = window.setInterval(function(){
            if(seconds === 59){
                seconds = 0;
                minutes++;
                return;
            }
            if(seconds%5==0){
                // inference();
                facemesh_inference();
            }
            if(enterBtn.innerHTML==="Enter"){
                window.clearInterval(contador);
                return;
            }
            if(minutes>=5){
                seconds = 0;
                minutes = 0;
                window.clearInterval(contador);
                return;
            }
            seconds++;
                
        }, 1000)
    }
    
    async function facemesh_inference(){
        time += 1
        const model = await facemesh.load();
        const predictions = await model.estimateFaces(webcamElement);
        var score = 1.0;
        if(predictions.length > 0){
            for(let i=0;i<predictions.length;i++){
                const keypoints = predictions[i].scaledMesh;
                var mse = 0;
                for(let j=0;j<keypoints.length;j++){
                    const [x, y, z] = keypoints[j];
                    if(prev_keypoints!==0){
                        const [prev_x, prev_y, prev_z] = prev_keypoints[j];
                        mse += (prev_x-x)*(prev_x-x) + (prev_y-y)*(prev_y-y)+(prev_z-z)*(prev_z-z);
                    }
                    else{
                        var mse = 0;
                    }
                }
                console.log(i, mse);
                prev_keypoints = keypoints;
            }
            if(mse>=500000){
                score = 0.5;
                speakstart("산만해");
                facenum.innerHTML = "산만해";
            }
            else if(mse<500000){
                score=1.0;
            }
            // document.getElementById("facenum").innerText = sum(data);
        }
        
        else{
            score = 0.0;
            speakstart("어디 갔어?");
            facenum.innerHTML = "어디갔어?";
        }
        data.push(score);
        times.push(time);
        //var ctx = document.getElementById('myChart').getContext('2d');
        //var chart = new Chart(ctx, {
            //The type of chart we want to create
            //type: 'line',

            // The data for our dataset
            //data: {
                //labels: times,
                //datasets: [{
                    //label: 'Your Pomodoro Score',
                    //backgroundColor: 'rgb(255, 99, 132)',
                    //borderColor: 'rgb(255, 99, 132)',
                    //data: data
                //}]
            //},

            // Configuration options go here
            //options: {}
        //});
    }

    // 배열 합계 구하기 함수
    function sum(array) {
        var result = 0.0;
        for (var i = 0; i < array.length; i++)
            result += array[i];
        return result;
    }
    
    enterBtn.addEventListener("click",
        evt => {
          inferencestart();
          evt.preventDefault();
        },
        false
    );
}
export default initJavis;