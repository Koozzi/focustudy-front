import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom';

import "./Dashboard_Header.css";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg"
import { BsPeopleFill, BsListCheck, BsPencilSquare } from "react-icons/bs"
import { BiMedal } from "react-icons/bi"

export default function Dashboard_Header () {
    return (
        <>
        <ui className="dashboard-navbar">
            <h1 className="Dash_RealHome"><a href="/">FocuStudy</a></h1>
            <div className="aaa">
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus"><TiHome/> Home</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/study"><BsPencilSquare/> Study</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/profile"><CgProfile/> Profile</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/social"><BsPeopleFill/> Social</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/todo"><BsListCheck/> To-Do</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/rank"><BiMedal/> Rank</NavLink>
            </div>
        </ui>
        </>
    )
}