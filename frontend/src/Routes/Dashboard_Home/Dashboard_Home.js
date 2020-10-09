import React from 'react'
import { useHistory } from 'react-router-dom';

import "./Dashboard_Home.css";

export default function Dashboard_Home() {
    const history = useHistory();

    const study = () => history.push("/focus/study");
    return (
        <div>
            <div className="Dashboard-Home-Text">
                <p>FocuStudy는 여러분을 항상 응원합니다.</p>
                <p>세상에 없던 AI 집중력 타이머, 지금 바로 경험해보세요.</p>
            </div>
            <div className="Dashboard-Home-Button">
                <span onClick={study}>당장 공부하러 가기</span>
            </div>
            <div>
                <li>1. 우측 상단 프로필 아이콘</li>
                <li>2. 좌측 메뉴 클릭했을 때, 색상 유지</li>
                <li>3. Redis -> Rank System</li>
                <li>4. ...</li>
            </div>
        </div>
    )
}