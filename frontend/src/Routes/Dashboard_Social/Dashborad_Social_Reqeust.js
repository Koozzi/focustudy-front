import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Dashborad_Social_Reqeust( { request, displayName } ) {
    const DeleteMessage = async(user, e) => {
        /*
            1. 백엔드에서 메세지 삭제 API 만들기
            2. 자동으로 새로고침
        */
    }
    const AddFriend = async(user, e) => {
        /*
            1. 친구 수락 Axios.post AddFriend
            2. 메세지 삭제 -> DeleteMessage 함수 호출 + 백엔드에서 메세지 삭제 API 만들기
            3. 자동으로 새로고침
        */
    }

    const test = () => {
        window.location.reload(false);
    }

    return (
        <div>
            {request.map((user, index) => {
                return(
                    <div key={index}>
                        <li>{index+1} : {user.authorDisplayName}님으로부터 친구요청 메세지가 도착했습니다.</li>
                        <button onClick={(e) => AddFriend(user,e)}>수락</button>
                        <button onClick={(e) => DeleteMessage(user,e)}>삭제</button>
                    </div>
                )
            })}
            <button onClick={test}>test</button>
        </div>
    )
}

export default Dashborad_Social_Reqeust
