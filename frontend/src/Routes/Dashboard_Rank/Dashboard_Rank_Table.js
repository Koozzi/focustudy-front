import React from 'react'
import MaterialTable from 'material-table'

function Dashboard_Rank_Table({ users }) {
    const ListItem = users.map(Element => (
        <li key={Element._id}>{Element.displayName} - {Element.totalScore}</li>
    ))
    return (
        <div>
            <MaterialTable title="친구 목록"
            columns={[
                {title:'아이디', field:'displayName'},
                {title:'티어', field:'tier'},
                {title:'누적점수', field:'totalScore'},
                {title:'평균점수', field:'avgScore'}
            ]}
            data={users}
            options={{
                // paging: false
            }}
            />
        </div>
    )
}

export default Dashboard_Rank_Table
