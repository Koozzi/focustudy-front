import React from 'react'

import './Dashboard_Todo.css'
import { BsListCheck } from "react-icons/bs"

export default function Dashboard_Todo() {
    return (
        <div className="Real_Content">
        <div>
            <div className="title"> ToDo</div>
            <p>내일의 계획을 한 번 세워볼까요?</p>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <div>1. 우측 상단 프로필 아이콘</div>
            <div>2. Redis Rank System</div>
            <div>3. Rank Page Data Rendering</div>
        </div>
        </div>
    )
}
