import React from 'react'
import { useHistory } from 'react-router-dom';

import "./Dashboard_Home.css";

export default function Dashboard_Home() {
    const history = useHistory();

    const study = () => history.push("/focus/study");
    return (
        <div className="Dashboard-Home-Content">
            <p>FocuStudy는 항상 여러분을 응원합니다.</p>
            <p>세상에 없던 AI 집중력 타이머, 지금 바로 경험해보세요.</p>
            <button onClick={study}>공부하러 가기</button>
        </div>
    )
}