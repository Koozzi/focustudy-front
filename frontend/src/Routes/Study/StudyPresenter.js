import React from 'react';
import { useHistory } from 'react-router-dom';
import { BsPeopleFill, BsFillPersonFill } from "react-icons/bs"
import cryptoRandomString from 'crypto-random-string';
import "./Study.css";

export default function SelectStudy() {
    const history = useHistory();
    const random_string = cryptoRandomString({length: 15});
    const Multi = () => history.push("/focus/study/listroom");
    const Single = () => history.push(`/focus/study/room/${random_string}`, {
        roomNumber: 'Single Mode',
        key: 'Single Mode'
    });

    return (
        <div className="Real_Content">
            <div className="title"> Study</div>
            <div>여러분의 집중력은 저희가 체크할게요.</div>
            <div>혼자 혹은 다른 사람들과 집중해서 공부를 시작해보세요.</div>
            <div className="study_button">
                <span className="List">
                    <div className="Text">
                        <BsFillPersonFill className="PersonIcon"/>
                        <div className="RealText">싱글 모드</div>
                    </div>
                    <div className="Explain">혼자 집중해서 공부해보세요.</div>
                    <button className="Button" onClick={Single}>Start</button>
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