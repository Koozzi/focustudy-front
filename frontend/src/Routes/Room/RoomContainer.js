import React, { useLayoutEffect } from 'react'
import RoomPresenter from './RoomPresenter';
import initConference from '../../script/Conference';
import initTimer from '../../script/Timer';
import initJavis from '../../script/Report'

export default () => {
    useLayoutEffect(() => {
        initConference();
        initTimer();
        initJavis();
      }, []);
    return(
        <RoomPresenter />
    )
}
