import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import './Dashboard_Profile.css'

export default function Dashboard_Profile() {
    const [displayName, setDisplayName] = useState();
    const [tier, setTier] = useState();
    const [totalScore, setTotalScore] = useState();
    const [avgScore, setAvgScore] = useState();
    const [badge1, setBadge1] = useState();
    const [badge2, setBadge2] = useState();
    const [badge3, setBadge3] = useState();

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
        setTier(tokenRes.data.tier);
        setAvgScore(tokenRes.data.avgScore);
        setTotalScore(tokenRes.data.totalScore);
        setBadge1(tokenRes.data.badge.badge1);
        setBadge2(tokenRes.data.badge.badge2);
        setBadge3(tokenRes.data.badge.badge3);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    return (
        <div>
            <h1 className="title">Profile / {displayName}</h1>
            <h1>{tier}</h1>
            <h3>Total Focus Score : {avgScore}</h3>
            <h3>Average Focus Score : {totalScore}</h3>
            <h3>Badges</h3>
            <h4>Badge1 : {badge1}</h4>
            <h4>Badge2 : {badge2}</h4>
            <h4>Badge3 : {badge3}</h4>
        </div>
    )
}