import React, {useState, useEffect} from 'react'
import Axios from 'axios';

import './Dashboard_Rank.css'
import { BiMedal } from "react-icons/bi"

export default function Dashboard_Rank() {
    const [top10TotalScore, setTop10TotalScore] = useState([]);

    const GetTop10 = async() => {
        const total_10 = await Axios.post(
            "http://localhost:5050/rank/total_rank",
        );

        await total_10.data.forEach((Element)=>{
            console.log(Element);
            setTop10TotalScore([
                ...top10TotalScore,
                {
                    id: top10TotalScore.length,
                    displayName: Element.displayName,
                    totalScore: Element.totalScore
                }
            ]);
        });

        console.log(top10TotalScore);
    }

    useEffect(()=>{
        GetTop10();
    }, []);

    return (
        <div>
            <BiMedal className="icon"/>
            <h1 className="title"> Rank</h1>
            <p>나의 집중력순위를 확인해보세요!</p>
        </div>
    )
}