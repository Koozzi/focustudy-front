import React from 'react'
import { useHistory } from 'react-router-dom';

import "./Dashboard_Header.css";

export default function Dashboard_Header() {
    const history = useHistory();

    const home = () => history.push("/studyhome");
    const study = () => history.push("/study");
    const profile = () => history.push("/profile");
    const social = () => history.push("/social");
    const todo = () => history.push("/todo");
    const rank = () => history.push("/rank");

    return (
        <div className="dashboard-navbar">
            <li onClick={home}>홈</li>
            <li onClick={study}>공부하기</li>
            <li onClick={profile}>나의정보</li>
            <li onClick={social}>소셜</li>
            <li onClick={todo}>계획</li>
            <li onClick={rank}>랭크</li>
        </div>
    )
}