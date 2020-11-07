import React, { useEffect } from 'react'
import ResultPresenter from './ResultPresenter';


function ResultContainer (props){

    return(
        <ResultPresenter scores={props}/>
    )
}
export default ResultContainer;