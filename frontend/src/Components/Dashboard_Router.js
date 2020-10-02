import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Dashboard_Header from '../Routes/Dashboard_Header/Dashboard_Header';
import Dashboard_Home from '../Routes/Dashboard_Home/Dashboard_Home';
import Study from '../Routes/Study';
import Dashboard_Social from '../Routes/Dashboard_Social/Dashboard_Social';
import Dashboard_Profile from '../Routes/Dashboard_Profile/Dashboard_Profile';
import Dashboard_Todo from '../Routes/Dashboard_Todo/Dashboard_Todo';
import Dashboard_Rank from '../Routes/Dashboard_Rank/Dashboard_Rank';

export default function Dashboard_Router() {
    return (
        <Router>
            <Dashboard_Header />
            <Switch>
                <Route path="/studyhome" exact component={Dashboard_Home} />
                <Route path="/social" exact component={Dashboard_Social} />
                <Route path="/study" exact component={Study} />
                <Route path="/profile" exact component={Dashboard_Profile} />
                <Route path="/todo" exact component={Dashboard_Todo} />
                <Route path="/rank" exact component={Dashboard_Rank} />
            </Switch>
        </Router>
    )
}
