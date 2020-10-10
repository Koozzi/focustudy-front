import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import UserContext from './UserContext';
import "./Header.css";
import Container from '@material-ui/core/Container';

const btnStyle = {
  color: "white",
  background: "#ddd",
  padding: "12px 16px",
  fontSize: "20px",
  lineHeight: 1.5,
}

export default function Board() {
  const { userData, setUserData } = useContext(UserContext);
  
  const history = useHistory();
  
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
        token: undefined,
        user: undefined
    })
    localStorage.setItem("auth-token", "");
    history.push("/");
  };
  const About = () => history.push("/");
  const Contact = () => history.push("/");
  const Study = () => {
    if(userData.user) history.push("/focus")
    else history.push("/login")
  }

  return (
    <React.Fragment>
      {/* <div className="header">
        <h1>Focustudy</h1>
        <p>세상에 없던 AI 집중력 타이머. Jenkins Test</p>
      </div> */}
      
      <div className="navbar">
        <Container className="navbar_container">
          <div className="LEFT">
            <a href="/" className="Active">FocuStudy</a>
          </div>
          <div className="RIGHT">
            <button onClick={About}>About</button>
            <button onClick={Contact}>Contact</button>
            <button onClick={Study}>Study</button>
            {userData.user ?(
              <button onClick={logout}>Log Out</button>
                ) : (
              <button onClick={login}>Log In</button>
              )}
          </div>
        </Container>
      </div>
      
    </React.Fragment>
  );
}