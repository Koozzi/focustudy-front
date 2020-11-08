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
        <div className="Real_Content">
            <div className="title"> Rank</div>
            <p>나의 집중력순위를 확인해보세요!</p>
            <br/>
            <Dashboard_Rank_Table users={users}/>
        </div>
    )
}