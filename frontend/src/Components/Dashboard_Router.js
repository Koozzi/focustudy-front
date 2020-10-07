import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, useHistory } from "react-router-dom";
import Axios from 'axios';

import Dashboard_Header from '../Routes/Dashboard_Header/Dashboard_Header';
import Dashboard_Home from '../Routes/Dashboard_Home/Dashboard_Home';
import Study from '../Routes/Study';
import Dashboard_Social from '../Routes/Dashboard_Social/Dashboard_Social';
import Dashboard_Profile from '../Routes/Dashboard_Profile/Dashboard_Profile';
import Dashboard_Todo from '../Routes/Dashboard_Todo/Dashboard_Todo';
import Dashboard_Rank from '../Routes/Dashboard_Rank/Dashboard_Rank';

import "./Dashboard_Router.css"

export default function Dashboard_Router() {
    const history = useHistory();
    const checkLoggedIn = async() => {
        if(!localStorage.getItem("auth-token")) history.push("/login");
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
                </Switch>
            </div>
        </Router>
    )
}
