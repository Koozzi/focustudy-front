import React from 'react'
import MaterialTable from 'material-table'

function Dashboard_Social_Table({friends}) {    
    return (
        <div>
            <MaterialTable title="친구 목록"
            columns={[
                {title:'아이디', field:'displayName'},
                {title:'공부시간', field:'studyTime'},
                {title:'누적점수', field:'totalScore'},
                {title:'평균점수', field:'avgScore'}
            ]}
            data={
                friends
            }
            options={{
                search: false
            }}
            />
        </div>
    )
}

export default Dashboard_Social_Table
