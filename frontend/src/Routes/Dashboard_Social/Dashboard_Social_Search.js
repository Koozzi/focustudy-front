import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { setRef } from '@material-ui/core';

function Dashboard_Social_Search( {displayName} ) {
    const [user, setUser] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [input, setInput] = useState("");
    const [result, setResult] = useState();

    const [found, setFound] = useState(false);
    const [relation, setRelation] = useState(false);
    const [_displayName, _setDisplayName] = useState();
    const [_tier, _setTier] = useState();

    const handleChange = async(e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const getAllUsers = async() => {
        const _allUser = await Axios.post(
            "https://focustudy-back.site/rank/all_users",
        );
        setAllUsers(_allUser.data);
    }

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
        _setTier(SearchResult.data.tier);
    }

    const SendMessage = async() => {
        await Axios.post(
            // "https://focustudy-back.site/social/send_message",
            "https://focustudy-back.site/social/send_message",
            {
                reqUser: displayName,
                resUser: _displayName
            }
        )
    }

    useEffect(()=>{
        // getAllUsers();
    }, []);

    return (
        <div>
            유저검색
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
                        {_tier} {_displayName}
                        {relation ? (
                            <div>
                                이미친구
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
