import React, {useState, useEffect} from 'react'
import Axios from 'axios';

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
            Rank
        </div>
    )
}