import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, useHistory } from "react-router-dom";
import Axios from 'axios';

import Dashboard_Header from '../Routes/Dashboard_Header/Dashboard_Header';
import Dashboard_Home from '../Routes/Dashboard_Home/Dashboard_Home';
import Study from '../Routes/Study';
import Dashboard_Social from '../Routes/Dashboard_Social/Dashboard_Social';
import Dashboard_Profile from '../Routes/Dashboard_Profile/Dashboard_Profile';
import Dashboard_Todo from '../Routes/Dashboard_Todo/Dashboard_Todo';
import Dashboard_Rank from '../Routes/Dashboard_Rank/Dashboard_Rank';
import Multiroom from '../Routes/Multiroom/';
import Listroom from '../Routes/Dashboard_Listroom/Dashboard_Listroom';
import Ready from '../Routes/Ready'

import "./Dashboard_Router.css"

export default function Dashboard_Router() {
    var userData = {
        token: null,
        user: null
    }
    const history = useHistory();
    const checkLoggedIn = async() => {
        let token = localStorage.getItem("auth-token");
        if(token === null){
            history.push("/login");
            return;
        }
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/users/tokenIsValid",
            null,
            {
                headers: {
                    "x-auth-token": token
                }
            }
        );
        if(tokenRes.data){
            const userRes = await Axios.get(
                "https://focustudy-back.site/users/",
                {
                    headers: {
                        "x-auth-token": token
                    }
                }
            )
            userData.user = userRes.data;
        }
        if(!userData.user){
            history.push("/login");
        }
    }
    useEffect(()=>{
        checkLoggedIn();
    }, [])

    return (
        <Router>
            <Dashboard_Header />
            <div className="Dashboard_Content">
                <Switch>
                    <Route path="/focus" exact component={Dashboard_Home} />
                    <Route path="/focus/social" component={Dashboard_Social} />
                    <Route path="/focus/study" component={Study} />
                    <Route path="/focus/profile" component={Dashboard_Profile} />
                    <Route path="/focus/todo" component={Dashboard_Todo} />
                    <Route path="/focus/rank" component={Dashboard_Rank} />
                    <Route path="/focus/multiroom" component={Multiroom} />
                    <Route path="/focus/listroom" component={Listroom} />
                    <Route path="/focus/room/:roomNumber" exact component={Ready} />
                </Switch>
            </div>
        </Router>
    )
}
