import React from 'react'

import './Dashboard_Todo.css'
import { BsListCheck } from "react-icons/bs"

export default function Dashboard_Todo() {
    return (
        <div>
            <BsListCheck className="icon"/>
            <h1 className="title"> ToDo</h1>
        </div>
    )
}
