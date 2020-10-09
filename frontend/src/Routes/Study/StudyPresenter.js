import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { BsPeopleFill, BsFillPersonFill, BsPencilSquare } from "react-icons/bs"
import "./Study.css";

export default function SelectStudy() {
    const history = useHistory();
 
    const Multi = () => history.push("/focus/listroom");
    const Single = () => history.push("/focus/listroom");

    return (
        <div>
            <BsPencilSquare className="icon"/>
            <h1 className="title"> Study</h1>
            <p>여러분의 집중력은 저희가 체크할게요.</p>
            <p>혼자 혹은 다른 사람들과 집중해서 공부를 시작해보세요.</p>
            <div className="study_button">
                <span className="List">
                    <div className="Text">
                        <BsFillPersonFill/>
                        <div>싱글 모드</div>
                    </div>
                    <button className="Button" onClick={Multi}>Start</button>
                </span>
                <span className="List">
                    <div className="Text">
                        <BsPeopleFill/>
                        <div>멀티 모드</div>
                    </div>
                    <button className="Button" onClick={Multi}>Start</button>
                </span>
            </div>
        </div>
    );
}