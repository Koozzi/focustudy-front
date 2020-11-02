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
    const [roomList, setRoomList] = useState([]);

    const history = useHistory();

    const getAllRooms = async() => {
        const allRooms = await Axios.post(
            "http://localhost:5050/room/all_rooms"
        )
        console.log(allRooms.data);
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
        getAllRooms();
    }, [])

    return (
        <Container maxwidth="sm">
            <div>
                {displayName}
                 <button onClick={handleClickOpen}>
                    방생성
                 </button>
            </div>
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
                    {roomList.map(room => (
                        <Room 
                            roomNumber={room.title} key={room.title}
                        />
                    ))}
                </div>
            </div>

            <ui>
                <li>방 생성 -> DB 저장 -> DB에서 목록 불러오기 ㅇ</li>
                <li>1방 1 호스트 원칙</li>
                <li>한 호스트가 한 방만 만들게 냅두면 테스트할 때 너무 귀찮아져서 예외처리 일단 빼놓음</li>
                <li>방이 비어있으면 자동으로 방이 삭제되는 기능</li>
                <li>지금 같은 경우는 한 호스트가 여러개의 방을 만들어 놓은 상태임</li>
                <li>아무도 방에 존재하고 있지 않은데 방이 삭제되지 않고 있음</li>
                <li>Remotemonster 문서를 보고 사용자 목록을 불어오려고 했지만 실패</li>
                <li>사용자 목록 꼭 불러와야 함 -> 방에 누가 있나 없나 확인을 해야 함</li>
            </ui>
            
        </Container>
    );
}