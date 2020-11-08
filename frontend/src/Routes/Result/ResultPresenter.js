import React, { useState, useLayoutEffect } from 'react'
import Axios from 'axios';
import { Container, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from "react-chartjs-2";
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
	const [lastTotalScore, setLastTotalScore] = useState();
	const [lastAvgScore, setLastAvgScore] = useState();
	const [lastData, setLastData] = useState();
	
	let max_times = 0;
	const getUserInfo = async() => {
		let token = localStorage.getItem("auth-token");
        const _user = await Axios.post(
			"https://focustudy-back.site/result/user_info",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
		)
		await setUser(_user.data.displayName);
		await setLastData(_user.data.lastData);

		let sum = 0;
		let cnt = 0;
		let avg = 0;

		_user.data.lastData.forEach(Element => {
			cnt += 1;
			max_times+=1;
			sum += Element;
		})
		
		avg = (sum / cnt) * 100;
		console.log(cnt);
		console.log(max_times);

		await setLastTotalScore(sum.toFixed(2));
		await setLastAvgScore(avg.toFixed(2));
	}


	
	useLayoutEffect(() => {
		getUserInfo();
	}, [])
	
	
	const data = {
		labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,53,54,55,56,57,58,59,60],
		datasets: [
		  {
			label: '당신의 집중력 그래프',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data:lastData
		  }
		]
	  };
	
    return (
		
        <Container maxwidth="sm">
			<div className="title">고생하셨습니다!</div>
			<div className="title"> {user}님의 스터디 결과</div>
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
					
					<Typography component="legend">공부 시간</Typography>
					{/* <Rating name="size-large" value={5} size="large" readOnly /> */}
					25 분
				</Paper>
				</Grid>
				<Grid item xs>
				<Paper className={classes.paper}>
					<Typography component="legend">집중력 점수(누적)</Typography>
					{/* <Rating name="size-large" value={5} size="large" readOnly /> */}
					{lastTotalScore} / 300
				</Paper>
				</Grid>
				<Grid item xs>
				<Paper className={classes.paper}>
					<Typography component="legend">집중력 점수(평균)</Typography>
					{/* <Rating name="size-large" value={5} size="large" readOnly /> */}
					{lastAvgScore} / 100
				</Paper>
				</Grid>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper}>
				<Line data={data}></Line>
				</Paper>
			</Grid>
        </Container>
      );
};