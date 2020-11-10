import React from 'react';
// import { Link, useHistory } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
import "./Home.css";
import homeimage from "./assets/home.jpg";
import Header from "../../Components/Header";
import { Container, Grid } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   	paper: {
//     	padding: '6px 16px',
//   	},
//   	secondaryTail: {
//     	backgroundColor: theme.palette.secondary.main,
//   	},
// }));

function Home() {
	// const classes = useStyles();
	const First = () => {
		return(
		<>
			
			
			<img id="backvid" src={homeimage}></img>
			<Container>
			<Header />
			
			<p class="slogan">세상에 없던 AI 집중력 타이머</p>
			</Container>
			
		</>
		)
	}
    return (
        <React.Fragment>
			
			<div class="frame">
				<First />
			</div>
			<div>
				akjsndal
			</div>
        </React.Fragment>
      );
}

export default Home;