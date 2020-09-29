import ReadyPresenter from './ReadyPresenter';
import initConference from '../../script/Conference';
import initTimer from '../../script/Timer';
import initJavis from '../../script/Report';
import initMesh from '../../script/Mesh';
import React, { useLayoutEffect, useEffect } from 'react'

export default (props) => {
    let roomNumber = props.location.state.roomNumber;
    useEffect(()=>{
        initConference(props);
        // 
        initMesh();
    }, []);
    useLayoutEffect(() => {
        // initJavis();
        initTimer(props);
    }, []);
    
    return(
        <ReadyPresenter 
            roomNumber={roomNumber}
        />
    )
}