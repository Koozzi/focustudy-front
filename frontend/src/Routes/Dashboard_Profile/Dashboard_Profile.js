import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function Dashboard_Profile() {
    const [displayName, setDisplayName] = useState();

    const getUserInfo = async() => {
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "https://focustudy-back.site/profile/userinfo",
            null,
            {
                headers:{
                    "x-auth-token": token
                }
            }
        );
        console.log(tokenRes.data.displayName);
        setDisplayName(tokenRes.data.displayName);
    }

    useEffect(()=>{
        getUserInfo();
    }, []);

    return (
        <div>
            This is {displayName}'s Profile
        </div>
    )
}
