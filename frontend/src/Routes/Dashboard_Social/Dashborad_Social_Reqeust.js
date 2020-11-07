import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function Dashborad_Social_Reqeust( { request, displayName } ) {
    const ResponseMessage = async(index, message, e) => {
        window.location.reload(false);
    }
    const AddFriend = async(index, message, e) => {
        await Axios.post(
            "https://focustudy-back.site/social/addfriend",
            {
                rUser: displayName,
                sUser: message.sender
            }
        )

        window.location.reload(false);
    }

    console.log(request);

    return (
        <div>
            {/* {request.map((message, index) => {
                return(
                    <div key={index}>
                        {message.accept || message.deleted ? (
                            <div></div>
                        ) : (
                        <div>
                            <span>{message.sender}님으로부터 친구요청 메세지가 도착했습니다.</span>
                            <button onClick={(e) => AddFriend(index, message,e)}>수락</button>
                            <button onClick={(e) => ResponseMessage(index, message,e)}>거절</button>
                        </div>
                        )}
                    </div>
                )
            })} */}
        </div>
    )
}

export default Dashborad_Social_Reqeust
