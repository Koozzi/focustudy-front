import ReadyPresenter from './ReadyPresenter';
import initConference from '../../script/Conference';
import React, { useEffect } from 'react'

export default (props) => {
    let roomNumber = props.location.state.roomNumber;

    useEffect(()=>{
        initConference(props);
    }, []);
   
    
    return(
        <ReadyPresenter 
            roomNumber={roomNumber}
        />
    )
}