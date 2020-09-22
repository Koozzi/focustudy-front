import ReadyPresenter from './ReadyPresenter';
import initConference from '../../script/Conference';
import initTimer from '../../script/Timer';
import initJavis from '../../script/Report';
import React, { useLayoutEffect } from 'react'

export default (props) => {
    let roomNumber = props.location.state.roomNumber;
    
    useLayoutEffect(() => {
        initConference(props);
        initTimer(props);
        initJavis();
    }, []);
    
    return(
        <ReadyPresenter 
            roomNumber={roomNumber}
        />
    )
}