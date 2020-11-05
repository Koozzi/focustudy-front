import React, { useState, useEffect, useLayoutEffect } from 'react'
import Axios from 'axios';
import { Container, Grid, CardMedia, Card } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating'


const useStyles = makeStyles((theme) => ({
    root: {
      	flexGrow: 1,
    },
    paper: {
      	padding: theme.spacing(2),
      	textAlign: 'center',
      	color: theme.palette.text.secondary,
    },
}));

export default ({scores}) => {
	const classes = useStyles();
	
	const [user, setUser] = useState();
	const [studyTime, setStudyTime] = useState();
	const [totalScore, setTotalScore] = useState();
	const [avgScore, setAvgScore] = useState();

	const getUserInfo = async() => {
		let token = localStorage.getItem("auth-token");
        const _user = await Axios.post(
			"https://focustudy-back.site/result/user_info",
            // "http://localhost:5050/result/user_info",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
		)
		setUser(_user.data.displayName);
		setStudyTime(_user.data.studyTime);
		setTotalScore(_user.data.totalScore);
		setAvgScore(_user.data.avgScore);
	}

	useEffect(() => {
		getUserInfo();
	}, [])
	console.log("HIHIHIHIHIHIHIHIHIHIHI");
	console.log(scores);
	console.log("HIHIHIHIHIHIHIHIHIHIHI");
    return (
        <Container maxwidth="sm">
			<div className="title">고생하셨습니다!</div>
			<div className="title"> {user}님의 스터디 결과 </div>
			<Grid container spacing={5}>
				<Grid item xs>
				<Paper className={classes.paper}>
					<Typography className={classes.pos} color="textSecondary">
					<div>한번 더 해볼까요?</div>
					</Typography>
					<Link to={"/focus/study"}>다시 공부하러 가기</Link>
				</Paper>
				</Grid>
				<Grid item xs>
				<Paper className={classes.paper}>
					<Typography className={classes.pos} color="textSecondary">
					<audio autoplay="autoplay" id="end-of-time" src="https://kr.object.ncloudstorage.com/resume/iu.mp3"></audio>
					</Typography>
					<Typography component="legend">누적 공부 시간</Typography>
					{/* <Rating name="size-large" value={5} size="large" readOnly /> */}
					{studyTime} 분
				</Paper>
				</Grid>
				<Grid item xs>
				<Paper className={classes.paper}>
					<Typography component="legend">집중력 점수(누적)</Typography>
					{/* <Rating name="size-large" value={5} size="large" readOnly /> */}
					{totalScore} / 300
				</Paper>
				</Grid>
				<Grid item xs>
				<Paper className={classes.paper}>
					<Typography component="legend">집중력 점수(평균)</Typography>
					{/* <Rating name="size-large" value={5} size="large" readOnly /> */}
					{avgScore} / 100
				</Paper>
				</Grid>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper}>
				<div id="myChart" className="chart.js">여기에 차트가 들어갑니다.</div>
				</Paper>
			</Grid>
        </Container>
      );
};