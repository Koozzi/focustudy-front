import React, { useEffect } from 'react'
import ResultPresenter from './ResultPresenter';


function ResultContainer (props){
    var Chart = require('chart.js');
    // var ctx = document.getElementById('myChart').getContext('2d');
    /*var chart = new Chart(ctx, {
        type: 'line',

        data: {
            datasets: [{
                label: 'Your Pomodoro Score',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        },

            options: {}
    });*/

    return(
        <ResultPresenter scores={props}/>
    )
}
export default ResultContainer;