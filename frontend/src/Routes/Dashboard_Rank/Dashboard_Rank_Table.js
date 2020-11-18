import React from 'react'
import MaterialTable from 'material-table'

function Dashboard_Rank_Table({ users }) {
    return (
        <div>
            <MaterialTable title="전체 랭킹"
                columns={[
                    {title: '순위', field:'rank'},
                    {title:'아이디', field:'displayName'},
                    {title:'공부시간', field:'studyTime'},
                    {title:'누적점수', field:'totalScore'},
                    {title:'평균점수', field:'avgScore'}
                ]}
                data={users}
                options={{
                    paging: 10
                }}
            />
        </div>
    )
}

export default Dashboard_Rank_Table
