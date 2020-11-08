import React, { useState } from 'react'
import Axios from 'axios';

function Dashboard_Social_Search( {displayName} ) {
    const [input, setInput] = useState("");
    const [found, setFound] = useState(false);
    const [relation, setRelation] = useState(false);
    const [_displayName, _setDisplayName] = useState();

    const handleChange = async(e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const SearchUser = async(e) => {
        e.preventDefault();
        const SearchResult = await Axios.post(
            "https://focustudy-back.site/social/find",
            {
                currentUser: displayName,
                keyword: input
            }
        )
        console.log(SearchResult.data);
        if(SearchResult.data.friend.includes(displayName)){
            setRelation(true);
        } else {
            setRelation(false);
        }
        setFound(true);
        _setDisplayName(SearchResult.data.displayName);
    }

    const SendMessage = async() => {
        await Axios.post(
            "https://focustudy-back.site/social/send_message",
            {
                reqUser: displayName,
                resUser: _displayName
            }
        )
        alert("친구요청 메세지를 전송했습니다!");
        window.location.reload(false);
    }

    return (
        <div>
            <form type="submit" onSubmit={SearchUser}>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    value={input}
                />
                <button>검색</button>
                <br/>
                {found ? (
                    <div>
                        {_displayName}
                        {relation ? (
                            <div>
                                이미 친구입니다.
                            </div>
                        ) : (
                            <button onClick={SendMessage}>친구추가</button>
                        )}
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </form>
        </div>
    )
}

export default Dashboard_Social_Search
