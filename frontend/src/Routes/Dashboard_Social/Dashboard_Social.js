import React, { useState, useEffect } from 'react'
import Axios from 'axios';

// Style
import "./Dashboard_Social.css"
import { BsPeopleFill } from "react-icons/bs"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Dashboard_Social() {
    const [displayName, setDisplayName] = useState();
    const [friends, setFriends] = useState([]);

    const classes = useStyles();
    
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
        setDisplayName(tokenRes.data.displayName);
    }
    const getFriendInfo = async() => {
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/social/friend_list",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        await tokenRes.data.forEach(Element=>{
            friends.push(Element);
        });
    }

    useEffect(()=>{
        getUserInfo();
        getFriendInfo();
    }, [])

    return (
        <>
        <div>
            <BsPeopleFill className="icon"/>
            <h1 className="title"> Social</h1>
            <p>{displayName}님은 친구들 사이에서 ㅁ등을 하고있어요.</p>
            <p>여러분의 친구들은 열심히 하고 있나요?</p>
        </div>
        <br/>
        <br/>
        <br/>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>아이디</TableCell>
                    <TableCell align="right">티어</TableCell>
                    <TableCell align="right">누적점수</TableCell>
                    <TableCell align="right">평균점수</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {friends.map((row) => (
                <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                        {row.displayName}
                    </TableCell>
                    <TableCell align="right">{row.tier}</TableCell>
                    <TableCell align="right">{row.totalScore}</TableCell>
                    <TableCell align="right">{row.avgScore}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <br/>
        <br/>
        <br/>
        <li>1. Row 맨 오른쪽에 메뉴 아이콘 생성</li>
        <li>2. 메뉴 아이콘을 누르면 친구삭제, 친구에게 메세지 보내기</li>
        <li>3. 누적점수, 평균점수 소팅</li>
        <li>4. 유저찾기(찾아서 친구추가), 친구신청(본인에게 온 신청 목록)</li>
        <li>5. Row에서 친구 아이디 누르면 친구 프로필 팝업</li>
        </>
    )
}
