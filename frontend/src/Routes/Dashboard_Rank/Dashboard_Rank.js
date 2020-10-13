import React, {useState, useEffect} from 'react'
import Axios from 'axios';

import './Dashboard_Rank.css'
import Dashboard_Rank_Table from './Dashboard_Rank_Table';

export default function Dashboard_Rank() {
    const [users, setUsers] = useState([]);

    const getSortedUsers = async() => {
        const allUsers = await Axios.post(
            "https://focustudy-back.site/rank/all_users",
        );
        console.log(allUsers.data);
        const _users = await allUsers.data.map(Element=>{
            return Element
        })
        await _users.sort((a,b) => (a.totalScore > b.totalScore) ? -1 : 1)
        setUsers(_users);
    }

    useEffect(()=>{
        getSortedUsers();
    }, []);

    return (
        <div>
            <h1 className="title"> Rank</h1>
            <p>나의 집중력순위를 확인해보세요!</p>
            <br/>
            <Dashboard_Rank_Table users={users}/>
            <br/>
            <div>
                <li>사용자 아이디 누르면 사용자 프로필 팝업</li>
                <li>유저 프로필에서 친구신청 혹은 메세지 보내기 기능</li>
            </div>
        </div>
    )
}