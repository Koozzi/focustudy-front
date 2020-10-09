import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { MdFilterCenterFocus } from "react-icons/md";
import { BsPeopleFill, BsFillPersonFill } from "react-icons/bs"
import "./Study.css";
import { Container} from '@material-ui/core';
import logo from "./assets/single.jpg";
import logo2 from "./assets/multi.jpg";

export default function SelectStudy() {
    const history = useHistory();
 
    const Multi = () => history.push("/focus/study/listroom");
    const Single = () => history.push("/focus/study/listroom");

    return (
        <div>
            <MdFilterCenterFocus className="icon"/>
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
        // <Container maxwidth="sm">
        //     <div className="title"><h1>Single vs Multi?</h1></div>
        //     <div className="row">
        //         <div className="column">
        //             <div className="container">
        //                 <a href="/multiroom"><img src={logo} alt="Avatar" className="image"/>
        //                 <div className="middle"><div className="text">Single Mode</div></div></a>
        //             </div>
        //         </div>
        //         <div className="column">
        //             <div className="container">
        //                 <a href="/listroom"><img src={logo2} alt="Avatar" className="image"/>
        //                 <div className="middle"><div className="text">Multi Mode</div></div></a>
        //             </div>
        //         </div>
        //     </div>
            
        // </Container>
        
    );
}