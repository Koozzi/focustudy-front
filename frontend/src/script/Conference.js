import Remon from "@remotemonster/sdk";
import Axios from "axios";
import * as tf from '@tensorflow/tfjs';
import ResultContainer from '../Routes/Result/ResultContainer';

const initConference = (props) => {
	const enterBtn = document.querySelector("#enterBtn");
	const otherVideos= document.getElementById('otherVideos');
	const RoomId = props.location.state.roomNumber;
	const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);
	const hashedRoomId = "a" + hashCode(RoomId) + "a";
  let timer = document.getElementById('timer');
	let isConnected = false;
	let remon;
	let remonRoom=[];

	const key = "1234567890";
	const serviceId = "SERVICEID1";
  var seconds = 0;
  var minutes = 0;
  let left_time = 5;

	const webcamElement = document.getElementById('myVideo');
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
  
    // please register your own service key from remotemonster site.
	let config = {
		credential: {
			key: key,
			serviceId: serviceId,
			wsurl : "wss://signal.remotemonster.com/ws",
			resturl : "https://signal.remotemonster.com/rest",
		},
		view: {
			remote: "#remoteVideo",
			local: "#myVideo"
		},
		media: {
			video: {
				width: { min: 160, max: 320 },
				height: { min: 120, max: 240 },
				frameRate: { min: 8, max: 30 },
				maxBandwidth: 500,
				codec: 'H264'
			},
		audio: true
		}
	};

	const videoAttrs = {
		className : "remote-video center w-320 h-240",
		autoPlay : true,
		muted : true,
		controls: true,
		playsInine: true,
		style :"z-index:1;background: rgba(0, 0, 0, 0.5); width: 300px;"
	}
	
	const listener = {
		onConnect(chid) {
			console.log(`remon.listener.onConnect ${chid} at listener`);
		},
		onComplete() {
			// console.log(`remon.listener.onComplete: ${remon.getChannelId()} `);
			remonRoom[remon.getChannelId()] = true;
		},
		onDisconnectChannel() {
			// is called when other peer hang up.
			remon.close();
			isConnected = false;
		},
		onClose() {
			// is called when remon.close() method is called.
			// console.log(`remon.listener.onClose: ${remon.getChannelId()}`);
		},
		onError(error) {
			// console.log(`remon.listener.onError: ${remon.getChannelId()} ${error}`);
		},
		onStat(result) {
			// console.log(`EVENT FIRED: onStat:  ${JSON.stringify(result)}`);
		},
		onRoomEvent(result){
			//join
			switch (result.event) {
			case 'join':
				// console.log("****SWITCH****");
				// console.log(result);
				// console.log("****SWITCH****");
				if(!remonRoom[result.channel.id]){
					remonRoom[result.channel.id] = true;
					let newVideo = document.createElement('video')
					videoAttrs.id = result.channel.id.replace(":","-");
					Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]))
					config.view.remote = `#${newVideo.id}`
					newVideo.remon = new Remon({ config })
					otherVideos.appendChild(newVideo)
					newVideo.remon.joinCast(newVideo.id.replace("-",":"))
				}
				break;
			case 'leave':
				if(remonRoom[result.channel.id] && result.channel.id !== remon.getChannelId()){
					let video = document.getElementById(result.channel.id.replace(":","-"));
					otherVideos.removeChild(video);
					delete remonRoom[result.channel.id]
					if(remonRoom.length === 0){
						console.log("HiHi");
					}
				}
				break;
			}
			console.log(`EVENT FIRED: onRoomEvent channel Id : ${remon.getChannelId()}`)
			console.log(`EVENT FIRED: onRoomEvent: ${JSON.stringify(result)}`)
		}
	};

	async function start() {
		if (isConnected) { // 방에 참여하고 있을 때 
			isConnected = false;
			document.querySelector('#enterBtn').innerHTML = "Enter";

			var cnt = 0;

			Object.keys(remonRoom).forEach(function(id){
				cnt = cnt + 1;
				if( id !== remon.getChannelId()){
					let video = document.getElementById(id.replace(":","-"));
					if(video && video.remon){
						otherVideos.removeChild(video);
					}
				}
				delete remonRoom[id];
			})

			if(cnt === 1) {
				// 무언가
			}

			remon.close()
		} 
		else { 
			isConnected = true;
			document.querySelector('#enterBtn').innerHTML = "leave"; 
			remon = new Remon({ config, listener }); 
			await remon.createRoom(hashedRoomId); 
			let participants = await remon.fetchRooms(hashedRoomId); 
			participants.forEach(async function(participant){
				if(!remonRoom[participant.id]){
					remonRoom[participant.id] = true;
					let newVideo = document.createElement('video'); 
					videoAttrs.id =  participant.id.replace(":","-");
					Object.keys(videoAttrs).forEach(key => newVideo.setAttribute(key, videoAttrs[key]))
					config.view.remote = `#${newVideo.id}`
					newVideo.remon = new Remon({ config })
					otherVideos.appendChild(newVideo)
					await newVideo.remon.joinCast(newVideo.id.replace("-",":"));
				}
			})
		}
	}


	const update_time_score = async() => {
		let token = localStorage.getItem("auth-token");

		const update_score = await Axios.post(
			"https://focustudy-back.site/score/update_study_score",
			// "http://localhost:5050/score/update_study_score",
			{
				data: data,
				study_time: left_time
			},
			{
				headers:{
					"x-auth-token": token
				}
			}
		);
		
		window.open("/result", "_self");
	}

	const timerstart = async() => {
		var contador = null;
		// console.log(isConnected);
		
		seconds = 1;
		contador = window.setInterval(function(){
			if(seconds === 59){
        minutes++;
        seconds = 0;
        // printTimer(minutes, seconds);
				return;
			}
			if(seconds%5==0){
				facemesh_inference();
			}
			if(enterBtn.innerHTML === "Enter"){
				timer.innerHTML = "00m00s";
				window.clearInterval(contador);
				return;
			}
			else if(minutes>=left_time){
				seconds = 0;
				minutes = 0;
				timer.innerHTML = "00m00s";
				
				window.clearInterval(contador);
				// ResultContainer(data);
				update_time_score();
				return;
			}
			else{
				printTimer(minutes, seconds);
			}
			seconds++;
		}, 1000)
	}
	async function printTimer(minutes, seconds){
		//console.log(minutes, seconds);
		var show_min = left_time - minutes - 1;
		var show_sec = (60 - seconds) % 60;
		if(show_min<10){
			show_min = "0"+show_min;
		}
		if(show_sec<10){
			show_sec = "0"+show_sec;
		}
		timer.innerHTML = show_min+"m"+show_sec+"s";
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
        facenum.innerHTML = "잘하고 있어";
			}
		}

		else{
			score = 0.0;
			speakstart("어디 갔어?");
			facenum.innerHTML = "어디갔어?";
		}
		data.push(score);
		times.push(time);
	}

	enterBtn.addEventListener("click",
		evt => {
      		start();
      		timerstart();
			    evt.preventDefault();
		},
		false
	);
}

export default initConference;