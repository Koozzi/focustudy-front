import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import cryptoRandomString from 'crypto-random-string';

import "./Dashboard_Listroom.css";
import Room from "../../Components/Room";

// Material Ui
import TextField from '@material-ui/core/TextField';
import { Container, Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function SelectStudy() {
    const [open, setOpen] = useState(false);
    const [displayName, setDisplayName] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [roomList, setRoomList] = useState([]);

    const history = useHistory();

    const getAllRooms = async() => {
        const allRooms = await Axios.post(
            "https://focustudy-back.site/room/all_rooms"
        )
        const _rooms = await allRooms.data.map(Element => {
            return Element
        })
        setRoomList(_rooms);
    }

    const userinfo = async() => {
        let token = localStorage.getItem("auth-token");
        const userToken = await Axios.post(
            // "https://focustudy-back.site/room/userinfo",
            "https://focustudy-back.site/room/userinfo",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        )

        await setDisplayName(userToken.data.displayName);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const createRoom = async() => {
                
        const random_string = cryptoRandomString({length: 15});
        await Axios.post(
            "https://focustudy-back.site/room/create_room",
            {
                title: title,
                description: description,
                host: displayName,
                room_id: random_string
            }
        )
        
        console.log(random_string);

        setOpen(false);

        history.push(`/focus/study/room/${random_string}`, {
            roomNumber: title,
            key: title
        });
    }

    useEffect(() => {
        userinfo();
        getAllRooms();
    }, [])

    return (
        <Container maxwidth="sm">
            <Typography><div className="title"> Study Room </div></Typography>
            <br/>
            <Typography>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    {displayName} 님. 함께 공부하러가요!
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" style={{ color: red[500] }} onClick={handleClickOpen}>방 만들기</Button>
                </Grid>
            </Grid>
            </Typography>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">공부방 생성하기</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        집중해서 공부할 수 있는 방을 만들어보세요!!
                    </DialogContentText>
                    <DialogContentText>
                        방 이름
                    </DialogContentText>
                    <TextField autoFocus margin="dense" id="name" fullWidth onChange={e => setTitle(e.target.value)} />
                    <DialogContentText>
                        방 설명
                    </DialogContentText>
                    <TextField autoFocus margin="dense" id="name" fullWidth onChange={e => setDescription(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={createRoom} color="primary">생성</Button>
                    <Button variant="contained" onClick={handleClose} color="primary">취소</Button>
                </DialogActions>
            </Dialog>
            <div className="row">
                <div className="rooms">
                    {roomList.map(room => (
                        <Room 
                            roomNumber={room.title} key={room.title} description={room.description}
                        />
                    ))}
                </div>
            </div>        
        </Container>
    );
}