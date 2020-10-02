import React, { useState, useEffect } from 'react'
import Axios from 'axios';

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
            social
        </div>
    )
}
