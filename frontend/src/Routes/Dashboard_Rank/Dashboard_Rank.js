import React, {useState, useEffect} from 'react'
import Axios from 'axios';

import './Dashboard_Rank.css'
import { BiMedal } from "react-icons/bi"

export default function Dashboard_Rank() {
    const [top10TotalScore, setTop10TotalScore] = useState([]);
    
    const GetTop10 = async() => {
        const total_10 = await Axios.post(
            "https://focustudy-back.site/rank/total_rank",
            // "http://localhost:5050/rank/total_rank",
        );

        await total_10.data.forEach(Element=>{
            top10TotalScore.push(Element);
        });
    }

    useEffect(()=>{
        GetTop10();
    }, [top10TotalScore]);

    const ListItem = top10TotalScore.map(Element => (
        <li key={Element._id}>{Element.displayName} - {Element.totalScore}</li>
    ))

    return (
        <div>
            <BiMedal className="icon"/>
            <h1 className="title"> Rank</h1>
            <p>나의 집중력순위를 확인해보세요!</p>
            <br/>
            <div>
                {ListItem}
            </div>
            <br/>
            <div>
                <li>1. 전체 사용자 순위 나타내기</li>
                <li>2. Total Score 순위</li>
                <li>3. Average Score 순위</li>
                <li>4. 사용자 아이디 누르면 사용자 프로필 팝업</li>
            </div>
        </div>
    )
}