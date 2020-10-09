import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import "./Dashboard_Social.css"
import { BsPeopleFill } from "react-icons/bs"

export default function Dashboard_Social() {
    const getUserInfo = async() => {
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/social/userinfo",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        console.log(tokenRes.data.friend);
    }

    useEffect(()=>{
        getUserInfo();
    }, [])
    
    return (
        <div>
            <BsPeopleFill className="icon"/>
            <h1 className="title"> Social</h1>
            <p>여러분의 친구들은 열심히 하고 있나요?</p>
        </div>
    )
}
