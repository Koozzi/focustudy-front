import React, {useState, useEffect} from 'react'
import Axios from 'axios';

import './Dashboard_Rank.css'
import DashboardRankTable from './Dashboard_Rank_Table';

export default function Dashboard_Rank() {
    const [users, setUsers] = useState([]);

    const getSortedUsers = async() => {
        const allUsers = await Axios.post(
            "https://focustudy-back.site/rank/all_users",
        );

        console.log(allUsers.data)

        const _users = await allUsers.data.map(Element=>{
            return Element
        })

        await _users.sort((a,b) => (a.totalScore > b.totalScore) ? -1 : 1)

        let rank = 0
        const final_user = await _users.map(Element => {
            rank = rank + 1
            return (
                {
                    rank: rank,
                    displayName: Element.displayName,
                    totalScore: Element.totalScore,
                    avgScore: Element.avgScore,
                    studyTime: Element.studyTime
                }
            )
        })

        setUsers(final_user);
    }

    useEffect(()=>{
        getSortedUsers();
    }, []);

    return (
        <div className="Real_Content">
            <div className="title"> Rank</div>
            <p>나의 집중력순위를 확인해보세요!</p>
            <br/>
            <DashboardRankTable users={users}/>
        </div>
    )
}