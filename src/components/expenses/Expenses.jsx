import React from "react";
 import { useState } from "react";
import Card from "../../ui/Card";
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYaer] = useState('2022')

  const getFilterDataHandler = (selectedYear) => {
    setSelectedYaer(selectedYear)
  }
  const filteredExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear() === Number(selectedYear)
  })
   
  let expenseContext = <p style={{color:'red'}}>No expense found</p>
  if (filteredExpenses.length > 0) {
    expenseContext = filteredExpenses.map((el) => {
      return (
          <ExpenseItem
           key={el.id}
           title={el.title}
           date={el.date}
           amount={el.amount}
          />
      )
  })
}
if (selectedYear === 'all') {
  expenseContext = props.expenses.map((el) => {
    return (
      <ExpenseItem
           key={el.id}
           title={el.title}
           date={el.date}
           amount={el.amount}
           />
    )
  })
}
    return (
        <Card className='expenses'>
          <ExpensesChart expenses={props.expenses}/>
          <ExpenseFilter
           onGetFilterData={getFilterDataHandler}
           selected={selectedYear}
           />
           {expenseContext}
           
        </Card>
    );
};

export default Expenses;