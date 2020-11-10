import { Container, Grid } from '@material-ui/core';
import asset3 from "./assets/asset3.png";
import asset4 from "./assets/asset4.png";
import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../../Components/UserContext';
import homeimage from "./assets/home.jpg";
import { BsPeopleFill} from "react-icons/bs"
import "./About.css";
export default () => {
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
    const Home = () => history.push("/");
    const Contact = () => history.push("/contact");
    const Study = () => {
      if(userData.user) history.push("/focus");
      else history.push("/login");
    }
  
    return (
        <React.Fragment>
            <Container>
            
            
            <Grid container spacing={20}>
                <div className="navbar2">
                    <div className="navbar_container2">
                    <div className="LEFT2">
                        {/*<button onClick={Home} className="header_button">FocuStudy</button>*/}
                        <a href="/" className="Active2">FocuStudy</a>
                    </div>
                    <div className="RIGHT2">
                        <button onClick={Study} className="header_button2">공부하기</button>
                        <button onClick={About} className="header_button2">소개</button>
                        <button onClick={Contact} className="header_button2">문의</button>
                        {userData.user ?(
                        <button onClick={logout} className="header_button2">로그아웃</button>
                            ) : (
                            <>
                            <button onClick={login} className="header_button2">로그인</button>
                            <button onClick={register} className="header_button2">회원가입</button>
                            </>
                        )}
                    </div>
                    </div>
                </div>
            </Grid>
            
            
            
			<Grid container spacing={20}>
				<Grid item xs>
                    <h1>집중력 타이머 소개</h1>
                    <p> 안녕하세요. 저희 FocuStudy는 화상회의에 대한 실시간 영상 분석 솔루션을 제공합니다. </p>
                    <p>기능은 다음과 같습니다.</p>
                        <li> 화상회의 기능</li>
                        <li> 영상 분석을 이용한 집중력 탐지</li>
                </Grid>
                <Grid item xs><img src={asset3}></img></Grid>
            </Grid>
            <Grid container spacing={5}>
            <Grid item xs><img src={asset4}></img></Grid>
				<Grid item xs>
                    <h1>Focustudy는 </h1>
                    <p>저희 솔루션은 영상 속 상황을 세 가지 경우로 나눕니다. </p>
                        <li> 자리에 사람이 있는지 </li>
                        <li> 산만하지 않는지</li>
                        <li> 그 외에는 집중하는 것으로 판단 </li>
                    <p>25분 제한이 있습니다.</p>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
				<Grid item xs>
                    <BsPeopleFill/>대표자 : 구치훈, 이승현, 팽진희
                </Grid>
                <Grid item xs><BsPeopleFill/>전화번호 : 010-2680-3163</Grid>
                <Grid item xs><BsPeopleFill/> 이메일 : easter3163@naver.com</Grid>
            </Grid>
            </Container>
        </React.Fragment>
      );
}