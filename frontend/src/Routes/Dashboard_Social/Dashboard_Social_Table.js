import React, { useEffect } from 'react'
import MaterialTable from 'material-table'

function Dashboard_Social_Table({friends}) {
    const data = [
        {displayName: 'koozzi1', tier: 12, totalScore: 1, avgScore: 2},
        {displayName: 'koozzi2', tier: 19, totalScore: 1, avgScore: 2},
        {displayName: 'koozzi3', tier: 9, totalScore: 1, avgScore: 2},
        {displayName: 'koozzi4', tier: 4, totalScore: 1, avgScore: 2}
    ]

    const TEST = () => {
        console.log(data);
        console.log(friends[0]);
    }
    
    return (
        <div>
            <MaterialTable title="친구 목록"
            columns={[
                {title:'아이디', field:'displayName'},
                {title:'티어', field:'tier'},
                {title:'누적점수', field:'totalScore'},
                {title:'평균점수', field:'avgScore'}
            ]}
            data={data}
            options={{
                paging: false
            }}
            />
            <br/>
            <button onClick={TEST}>test</button>
            <br/>
        </div>
    )
}

export default Dashboard_Social_Table
