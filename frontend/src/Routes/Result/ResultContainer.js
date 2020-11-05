import React from 'react'
import ResultPresenter from './ResultPresenter';


function ResultContainer (props){
    console.log("HIHIHIHIHIHIHIHIHIHIHI");
	console.log(props);
	console.log("HIHIHIHIHIHIHIHIHIHIHI");
    let data = 5555555;
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
        <ResultPresenter scores={data}/>
    )
}
export default ResultContainer;