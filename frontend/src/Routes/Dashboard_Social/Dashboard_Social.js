import React, { useState, useEffect } from 'react'
import Axios from 'axios';

// Style
import "./Dashboard_Social.css"

import Dashboard_Social_Table from './Dashboard_Social_Table'
import Dashboard_Social_Search from './Dashboard_Social_Search';
import Dashborad_Social_Reqeust from './Dashborad_Social_Reqeust';

  
export default function Dashboard_Social() {
    const [displayName, setDisplayName] = useState();
    const [friends, setFriends] = useState([]);

    const getFriendInfo = async() => {
        let token = localStorage.getItem("auth-token");
        const userToken = await Axios.post(
            "https://focustudy-back.site/profile/userinfo",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        await setDisplayName(userToken.data.displayName);
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/social/friend_list",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );

        const _friends = await tokenRes.data.map(Element => {
            return {
                displayName: Element.displayName,
                tier: Element.tier,
                totalScore: Element.totalScore,
                avgScore: Element.avgScore
            }
        })
        setFriends(_friends);
    }

    useEffect(()=>{
        getFriendInfo();
    }, [])

    return (
        <div>
            <div>
                <h1 className="title"> Social</h1>
                <p>{displayName}님은 친구들 사이에서 ㅁ등을 하고있어요.</p>
                <p>여러분의 친구들은 열심히 하고 있나요?</p>
            </div>
            <div>
                <Dashboard_Social_Search />
                <Dashborad_Social_Reqeust />
            </div>
            <Dashboard_Social_Table friends={friends}/>
            <li>유저찾기(찾아서 친구추가), 신청목록(본인에게 온 신청 목록) 버튼</li>
            <li>Row에서 친구 아이디 누르면 친구 프로필 팝업</li>
            <li>친구 프로필에서 친구 삭제, 메세지 보내기 기능</li>
        </div>
    )
}