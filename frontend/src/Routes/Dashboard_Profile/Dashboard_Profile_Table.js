import React from 'react'
import MaterialTable from 'material-table'

function Dashboard_Profile_Table({studyLogs}) {
    return (
        <div>
            <MaterialTable title="나의 공부 기록"
            columns={[
                {title:'No.', field: '_id'},
                {title: '날짜', field: 'Date'},
                {title: '누적점수(300)', field: 'totalScore'},
                {title: '평균점수(100)', field: 'avgScore'}
            ]}
            data={studyLogs}
            / >
        </div>
    )
}

export default Dashboard_Profile_Table
