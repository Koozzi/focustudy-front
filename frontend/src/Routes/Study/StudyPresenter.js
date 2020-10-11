import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { BsPeopleFill, BsFillPersonFill, BsPencilSquare } from "react-icons/bs"
import "./Study.css";

export default function SelectStudy() {
    const history = useHistory();
 
    const Multi = () => history.push("/focus/study/listroom");
    const Single = () => history.push("/focus/study/listroom");

    return (
        <div>
            <h1 className="Title"> Study</h1>
            <p>여러분의 집중력은 저희가 체크할게요.</p>
            <p>혼자 혹은 다른 사람들과 집중해서 공부를 시작해보세요.</p>
            <div className="study_button">
                <span className="List">
                    <div className="Text">
                        <BsFillPersonFill className="PersonIcon"/>
                        <div className="RealText">싱글 모드</div>
                    </div>
                    <div className="Explain">혼자 집중해서 공부해보세요.</div>
                    <button className="Button" onClick={Multi}>Start</button>
                </span>
                <span className="List">
                    <div className="Text">
                        <BsPeopleFill className="PersonIcon"/>
                        <div className="RealText">멀티 모드</div>
                    </div>
                    <div className="Explain">온라인 도서관을 경험해보세요.</div>
                    <button className="Button" onClick={Multi}>Start</button>
                </span>
            </div>
        </div>
    );
}