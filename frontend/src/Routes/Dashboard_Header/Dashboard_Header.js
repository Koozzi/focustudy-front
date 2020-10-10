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
        <div className="dashboard-navbar">
            <h1 className="Dash_RealHome"><a href="/">FocuStudy</a></h1>
            <div className="aaa">
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus"><TiHome className="ReactIcon"/> Home</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/study"><BsPencilSquare className="ReactIcon"/> Study</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/profile"><CgProfile className="ReactIcon"/> Profile</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/social"><BsPeopleFill className="ReactIcon"/> Social</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/todo"><BsListCheck className="ReactIcon"/> To-Do</NavLink>
                <NavLink exact activeClassName="active_class" className="Menu" to="/focus/rank"><BiMedal className="ReactIcon"/> Rank</NavLink>
            </div>
        </div>
        </>
    )
}