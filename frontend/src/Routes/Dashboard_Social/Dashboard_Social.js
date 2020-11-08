import React, { useState, useEffect } from 'react'
import Axios from 'axios';

// Style
import "./Dashboard_Social.css"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import Dashboard_Social_Table from './Dashboard_Social_Table'
import Dashboard_Social_Search from './Dashboard_Social_Search';
import Dashborad_Social_Reqeust from './Dashborad_Social_Reqeust';
  
export default function Dashboard_Social() {
    const [displayName, setDisplayName] = useState();
    const [friends, setFriends] = useState([]);
    const [request, setRequest] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const getFriendInfo = async() => {
        let token = localStorage.getItem("auth-token");
        const userToken = await Axios.post(
            "https://focustudy-back.site/profile/userinfo",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        
        await setDisplayName(userToken.data[0].displayName);
        await setRequest(userToken.data[0].message);
        
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/social/friend_list",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        setFriends(tokenRes.data);
        
        const messages = await Axios.post(
            "https://focustudy-back.site/social/my_message",
            {
                currentUser: userToken.data[0].displayName
            }
        )
        console.log(messages.data);
        setRequest(messages.data)
        
    }

    useEffect(()=>{
        getFriendInfo();
    }, [])

    return (
        <div className="Real_Content">
            <div className="title"> Social</div>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <div>{displayName}님의 친구들은 열심히 하고 있나요?</div>
                </Grid>
                <Grid item xs={2} >
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        유저 검색
                    </Button>
                </Grid>
            </Grid>
            
            <br />
            <Dashboard_Social_Table friends={friends}/>
            <Dashborad_Social_Reqeust request={request} displayName={displayName}/>
            

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">사용자를 검색해 주세요!</DialogTitle>
                <DialogContent>
                    <Dashboard_Social_Search displayName={displayName}/>
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