import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from './UserContext';
import "./Header.css";

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
  const About = () => history.push("/about");
  const Contact = () => history.push("/contact");
  const Study = () => {
    if(userData.user) history.push("/focus");
    else history.push("/login");
  }

  return (
    <React.Fragment>
      
      <div className="navbar">
        <div className="navbar_container">
          <div className="LEFT">
            <a href="/" className="Active">FocuStudy</a>
          </div>
          <div className="RIGHT">
            <button onClick={Study} className="header_button">공부하기</button>
            <button onClick={About} className="header_button">소개</button>
            {userData.user ?(
              <button onClick={logout} className="header_button">로그아웃</button>
                ) : (
                <>
                  <button onClick={login} className="header_button">로그인</button>
                  <button onClick={register} className="header_button">회원가입</button>
                </>
              )}
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}