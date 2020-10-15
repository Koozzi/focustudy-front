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
        await setRequest(userToken.data.message);
        
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
    }

    useEffect(()=>{
        getFriendInfo();
    }, [])

    return (
        <div>
            <h1 className="title"> Social</h1>
            <p>{displayName}님의 친구들은 열심히 하고 있나요?</p>
            <Dashboard_Social_Search displayName={displayName}/>
            <Dashborad_Social_Reqeust request={request} displayName={displayName}/>
            <Dashboard_Social_Table friends={friends}/>
            <p>또 다른 데이터베이스를 둘까? 메모리는 많이 잡아먹지만 검색 속도를 빠르게 할 수 있는??</p>
        </div>
    )
}