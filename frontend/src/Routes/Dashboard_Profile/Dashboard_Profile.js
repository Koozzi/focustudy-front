import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import DashboardTable from './Dashboard_Profile_Table';

import './Dashboard_Profile.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        align:"center",
        justify:"center",
        direction:"column",
        color: theme.palette.text.secondary,
    },
}));


export default function Dashboard_Profile() {
    const classes = useStyles();
    const [displayName, setDisplayName] = useState();
    const [totalScore, setTotalScore] = useState();
    const [avgScore, setAvgScore] = useState();
    const [email, setEmail] = useState();
    const [studyLogs, setStudyLogs] = useState([]);
    const [totalStudyTime, setTotalStudyTime] = useState();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  

    const getUserInfo = async() => {
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/profile/userinfo",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        
        setEmail(tokenRes.data[0].email);
        setDisplayName(tokenRes.data[0].displayName);
        setAvgScore(tokenRes.data[0].avgScore.toFixed(2));
        setTotalScore(tokenRes.data[0].totalScore.toFixed(2));
        setTotalStudyTime(tokenRes.data[0].studyTime);
        setStudyLogs(tokenRes.data[1]);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    return (
        <div>
            <div className="Profile_Banner">
                <div className="Profile_Banner_Title">
                    Profile    
                </div>
                <section className="Profile_User">
                    <div className="Profile_User_Face">
                        
                    </div>
                    <div className="Profile_User_ID">
                        {displayName}
                        <br/>
                        {email}
                    </div>
                    <div className="Profile_User_Badge" onClick={handleClickOpen} >
                        배지 보관함
                    </div>
                </section>
                <div className="Profile_Text">
                    <div className="Profile_Banner_Content1">
                        배너 이미지 추가
                    </div>
                    <div className="Profile_Banner_Content2">
                        이곳을 클릭해 이미지를 업로드하거나
                    </div>
                    <div className="Profile_Banner_Content3">
                        이미지를 드래그 해 이곳에 놓아주세요.
                    </div>
                </div>
            </div>
            <div className="Profile_Contents">
                <div className="Profile_Scores">
                    <div className="Profile_Score_Container">
                        <div className="Profile_Tier">
                            <Paper >
                                <div className="Profile_Tier_Picture">
                                    {totalStudyTime} 
                                </div>
                            </Paper>
                            총 공부 시간 (분)
                        </div>
                        <div className="Profile_Total">
                            {totalScore}
                            <div className="Type_Score">
                                Total Score
                            </div>
                        </div>
                        <div className="Profile_Avg">
                            {avgScore}
                            <div className="Type_Score">
                                Average Score
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Profile_Chart">
                    Chart
                    <div>
                        평소 공부 기록을 확인해보세요!
                    </div>
                    <div className="Real_Chart">
                        <DashboardTable studyLogs={studyLogs} />
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">열심히 공부하고 다양한 뱃지를 모아보세요!</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        2020.11.30 출시 예정
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    닫기
                </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}