import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import "./Dashboard_Listroom.css";
import Room from "../../Components/Room";

// Material Ui
import TextField from '@material-ui/core/TextField';
import { Container} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SelectStudy() {
    const rooms = ["rmon1", "remon3", "remonvagegw", "awegwag", "waeg"];
    const [open, setOpen] = useState(false);
    const [displayName, setDisplayName] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const history = useHistory();

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
        setOpen(false);
        await Axios.post(
            "https://focustudy-back.site/room/create_room",
            {
                title: title,
                description: description,
                host: displayName
            }
        )
        history.push(`/focus/study/room/${title}`, {
            roomNumber: title,
            key: title
        });
    }

    useEffect(() => {
        userinfo();
    }, [])

    return (
        <Container maxwidth="sm">
            <div>
                {displayName}
                 <button onClick={handleClickOpen}>
                    방생성
                 </button>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelley="form-dialog-title">
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
                    <button onClick={createRoom}>
                        생성
                    </button>
                    <button onClick={handleClose}>
                        취소
                    </button>
                </DialogActions>
            </Dialog>
            <div className="row">
                <div className="rooms">
                    {rooms.map(room => (
                        <Room 
                            roomNumber={room} key={room}
                        />
                    ))}
                </div>
            </div>
            
        </Container>
    );
}