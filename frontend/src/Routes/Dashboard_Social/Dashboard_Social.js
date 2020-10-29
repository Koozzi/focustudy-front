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
    const [request, setRequest] = useState([]);
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
        // await setRequest(userToken.data.message);
        
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/social/friend_list",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        setFriends(tokenRes.data);
        
        const messages = await Axios.post(
            "https://focustudy-back.site/social/my_message",
            {
                currentUser: userToken.data.displayName
            }
        )
        
        console.log(messages.data);
        setRequest(messages.data)
        
    }

    useEffect(()=>{
        getFriendInfo();
    }, [])

    return (
        <div className="Real_Content">
            <div className="title"> Social</div>
            <div>{displayName}님의 친구들은 열심히 하고 있나요?</div>
            <Dashboard_Social_Search displayName={displayName}/>
            <Dashborad_Social_Reqeust request={request} displayName={displayName}/>
            <Dashboard_Social_Table friends={friends}/>
            <div>친구 요청 -> 수락 (완료)</div>
            <div>친구 요청 -> 거절 (미완)</div>
            <div>친구 삭제 (미완)</div>
            <div>안터넷 창을 껐을 때, 자동으로 로그아웃이 되면 현재 친구들 온라인/오프라인 상태 알 수 있을 듯</div>
        </div>
    )
}