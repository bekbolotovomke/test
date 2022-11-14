import React from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpenses = (props) => {

    const saveExpenseDataHandler = (expenseData) => {
        props.onGet(expenseData)
        console.log(expenseData)
    }


    return (
        <div className="new-expense"> 
        <ExpenseForm onSave={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpenses;