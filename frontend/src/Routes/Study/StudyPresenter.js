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
            <BsPencilSquare className="icon"/>
            <h1 className="title"> Study</h1>
            <p>"성공하기 위해 지녀야 할 자질이 있는데 이는 명확한 목표,목표에 대한 지식, 성취하고 자 하는 불타는 열망이다." -나폴레옹 힐-</p>
            <div className="study_button">
                <span className="List">
                    <div className="Text">
                        <BsFillPersonFill/>
                        <div>Single</div>
                    </div>
                    <button className="Button" onClick={Multi}>Start</button>
                </span>
                <span className="List">
                    <div className="Text">
                        <BsPeopleFill/>
                        <div>Multi</div>
                    </div>
                    <button className="Button" onClick={Multi}>Start</button>
                </span>
            </div>
        </div>
    );
}