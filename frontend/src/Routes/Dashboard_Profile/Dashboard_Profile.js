import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import Dashboard_Profile_Table from './Dashboard_Profile_Table';

import './Dashboard_Profile.css'

export default function Dashboard_Profile() {
    const [displayName, setDisplayName] = useState();
    const [tier, setTier] = useState();
    const [totalScore, setTotalScore] = useState();
    const [avgScore, setAvgScore] = useState();
    const [email, setEmail] = useState();
    const [badge1, setBadge1] = useState();
    const [badge2, setBadge2] = useState();
    const [badge3, setBadge3] = useState();
    const [studyLogs, setStudyLogs] = useState([]);

    const getUserInfo = async() => {
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/profile/userinfo",
            // "http://localhost:5050/profile/userinfo",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        
        setEmail(tokenRes.data[0].email);
        setDisplayName(tokenRes.data[0].displayName);
        setTier(tokenRes.data[0].tier);
        setAvgScore(tokenRes.data[0].avgScore.toFixed(2));
        setTotalScore(tokenRes.data[0].totalScore.toFixed(2));
        setBadge1(tokenRes.data[0].badge.badge1);
        setBadge2(tokenRes.data[0].badge.badge2);
        setBadge3(tokenRes.data[0].badge.badge3);
        setStudyLogs(tokenRes.data[1]);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    return (
        <div>
            <div className="Profile_Banner">
                <div className="Profile_Banner_Title">
                    Profile    
                </div>
                <section className="Profile_User">
                    <div className="Profile_User_Face">
                        
                    </div>
                    <div className="Profile_User_ID">
                        {displayName}
                        <br/>
                        {email}
                    </div>
                    <div className="Profile_User_Badge">
                        배지 보관함
                    </div>
                </section>
                <div className="Profile_Text">
                    <div className="Profile_Banner_Content1">
                        배너 이미지 추가
                    </div>
                    <div className="Profile_Banner_Content2">
                        이곳을 클릭해 이미지를 업로드하거나
                    </div>
                    <div className="Profile_Banner_Content3">
                        이미지를 드래그 해 이곳에 놓아주세요.
                    </div>
                </div>
            </div>
            <div className="Profile_Contents">
                <div className="Profile_Scores">
                    <div className="Profile_Score_Container">
                        <div className="Profile_Tier">
                            <div className="Profile_Tier_Picture">
                                
                            </div>
                            {tier}
                        </div>
                        <div className="Profile_Total">
                            {totalScore}
                            <div className="Type_Score">
                                Total Score
                            </div>
                        </div>
                        <div className="Profile_Avg">
                            {avgScore}
                            <div className="Type_Score">
                                Average Score
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Profile_Chart">
                    CHART
                    <div>
                        쉬이 불러 이웃 비둘기, 있습니다. 하나에 마다씩 이름자
                    </div>
                    <div>
                        이런 다 속의 파란 까닭입니다.
                    </div>
                    <div className="Real_Chart">
                        <Dashboard_Profile_Table studyLogs={studyLogs} />
                    </div>
                </div>
            </div>
        </div>
    )
}