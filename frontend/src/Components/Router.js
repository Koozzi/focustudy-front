import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from './Header';
import Ready from '../Routes/Ready/';
import Home from '../Routes/Home/';
import Study from '../Routes/Study/';
import Multiroom from '../Routes/Multiroom/';
import Listroom from '../Routes/Listroom/';
import Signin from '../Routes/SignIn';
import JoinRoom from '../Routes/JoinRoom';
import Result from '../Routes/Result/';
import Login from '../Routes/Login/';
import Register from '../Routes/Register/';
import UserContext from './UserContext';
import Axios from 'axios';
import Dashboard_Router from './Dashboard_Router';

export default () => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });

    useEffect(()=>{
        const checkLoggedIn = async()=>{
            let token = localStorage.getItem("auth-token");
            if(token === null){
                localStorage.setItem("auth-token", "");
                token = "";
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
                setUserData({
                    token,
                    user: userRes.data,
                })
            }
        }
        checkLoggedIn();
    }, [])

    return(
        <Router>
            <UserContext.Provider value={{userData, setUserData}}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/focus" component={Dashboard_Router} />

                    {/* 밑에 5줄 나중에 옮겨야 함 */}

                    <Route path="/multiroom" exact component={Multiroom} />
                    <Route path="/listroom" exact component={Listroom} />
                    <Route path="/joinroom" exact component={JoinRoom} />
                    <Route path="/result" exact component={Result} />
                    <Route path="/room/:roomNumber" exact component={Ready} />
                </Switch>
            </UserContext.Provider>
        </Router>
    );
}