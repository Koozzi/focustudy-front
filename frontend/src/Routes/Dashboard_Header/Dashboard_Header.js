import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

import "./Dashboard_Header.css";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg"
import { BsPeopleFill, BsListCheck, BsPencilSquare } from "react-icons/bs"
import { BiMedal } from "react-icons/bi"

export default function Dashboard_Header( {match} ) {
    const history = useHistory();

    const home = () => history.push("/focus");
    const study = () => history.push("/focus/study");
    const profile = () => history.push("/focus/profile");
    const social = () => history.push("/focus/social");
    const todo = () => history.push("/focus/todo");
    const rank = () => history.push("/focus/rank");

    return (
        <div className="dashboard-navbar">
            <h3 className="RealHome"><a href="/">FocuStudy</a></h3>
            <li onClick={home}><TiHome/> Home</li>
            <li onClick={study}><BsPencilSquare/> Study</li>
            <li onClick={profile}><CgProfile/> Profile</li>
            <li onClick={social}><BsPeopleFill/> Social</li>
            <li onClick={todo}><BsListCheck/> To-Do</li>
            <li onClick={rank}><BiMedal/> Rank</li>
        </div>
    )
}