import React from 'react'
import MaterialTable from 'material-table'

function Dashboard_Social_Table({friends}) {    
    return (
        <div>
            <MaterialTable title="친구 목록"
            columns={[
                {title:'아이디', field:'displayName'},
                {title:'티어', field:'tier'},
                {title:'누적점수', field:'totalScore'},
                {title:'평균점수', field:'avgScore'}
            ]}
            data={friends}
            options={{
                paging: false,
                search: false
            }}
            detailPanel={[
                {
                    render: rowData => {
                        return (
                            <div>
                                <button>친구삭제</button>
                                <li>{rowData.displayName}</li>
                                <li>{rowData.totalScore}</li>
                                <li>{rowData.totalScore}</li>
                            </div>
                        )
                    }
                }
            ]}
            />
        </div>
    )
}

export default Dashboard_Social_Table
