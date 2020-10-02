import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function Dashboard_Profile() {
    const [displayName, setDisplayName] = useState();
    const [tier, setTier] = useState();
    const [totalScore, setTotalScore] = useState();
    const [avgScore, setAvgScore] = useState();
    const [badge1, setBadge1] = useState();

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
        console.log(tokenRes.data.displayName);
        setDisplayName(tokenRes.data.displayName);
        setTier(tokenRes.data.tier);
        setAvgScore(tokenRes.data.avgScore);
        setTotalScore(tokenRes.data.totalScore);
        setBadge1(tokenRes.data.badge.badge1);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    return (
        <div>
            <h1>This is {displayName}'s Profile</h1>
            <h3>Tier : {tier}</h3>
            <h3>Total Focus Score : {avgScore}</h3>
            <h3>Average Focus Score : {totalScore}</h3>
            <h3>Badges</h3>
            <h4>Badge1 : {badge1}</h4>
        </div>
    )
}
