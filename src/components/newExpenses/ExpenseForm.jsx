import { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
   
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')


  

    const inputChangeHandler = (e) => {
      let currentInput = e.target.name;

      if (currentInput === 'title') {
        setTitle(e.target.value)
      }else if (currentInput === 'amount') {
        setAmount(e.target.value)
      }else if (currentInput === 'date') {
        setDate(e.target.value)
      }
    };

    const submitHandler = (event) => {
        event.preventDefault()
       
        const inputData = {
          id: Date.now().toString(),
          title: title,
          amount: Number(amount),
          date: new Date(date),
        };

        console.log(title);
        console.log(amount);
        console.log(date);
        props.onSave(inputData)

        
    };

    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className="new-expense__control">
                <label>Title</label>
                <input 
                value={title}
                name='title'
                type="text" 
                onChange={inputChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                 value={amount}
                 name='amount'
                 type="number"
                 min={1} 
                 step={0.1} 
                 onChange={inputChangeHandler}
                 />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                 value={date} 
                 name='date'
                 type="date"
                 min={'2021-01-01'} 
                 max={'2025-01-01'} 
                 onChange={inputChangeHandler}
                 />
            </div>
            <div className="new-expense__actions">
                <button>Add expenses</button>
            </div>
        </div>
    </form> 
    )
}

export default ExpenseForm