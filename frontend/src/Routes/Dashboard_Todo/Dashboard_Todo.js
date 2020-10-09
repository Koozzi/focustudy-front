import React from 'react'

import './Dashboard_Todo.css'
import { BsListCheck } from "react-icons/bs"

export default function Dashboard_Todo() {
    return (
        <>
        <div>
            <BsListCheck className="icon"/>
            <h1 className="title"> ToDo</h1>
            <p>내일의 계획을 한 번 세워볼까요?</p>
        </div>
        <br/>
        <div>
            <div>1. 우측 상단 프로필 아이콘</div>
            <div>2. 좌측 메뉴 클릭했을 때, 색상 유지</div>
            <div>3. Redis Rank System</div>
            <div>4. ...</div>
        </div>
        </>
    )
}
