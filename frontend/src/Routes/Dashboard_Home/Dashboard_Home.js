import React from 'react'
import { useHistory } from 'react-router-dom';

import "./Dashboard_Home.css";

export default function Dashboard_Home() {
    const history = useHistory();

    const study = () => history.push("/focus/study");
    return (
        <div className="Dashboard-Home-Content">
            <button onClick={study}>공부하기</button>
        </div>
    )
}