import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Dashboard_Header() {
    const history = useHistory();

    const home = () => history.push("/studyhome");
    const study = () => history.push("/study");
    const profile = () => history.push("/profile");
    const social = () => history.push("/social");
    const todo = () => history.push("/todo");

    return (
        <div>
            <button onClick={home}>대시보드</button>
            <button onClick={study}>공부하기</button>
            <button onClick={profile}>나의정보</button>
            <button onClick={social}>소셜</button>
            <button onClick={todo}>계획</button>
        </div>
    )
}