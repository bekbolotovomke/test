import React from "react";
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const selectChangeHandler = (e) => {
        props.onGetFilterData(e.target.value)
    }


    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year </label>
                <select onChange={selectChangeHandler} value={props.selected}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="all">All</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter