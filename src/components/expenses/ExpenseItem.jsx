
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';


function ExpenseItem(props) {

  let expenseTitle = props.title;
  const expenseAmount = props.amount;

  
    
    
    return ( 
    <div className='expense-item'>
      <ExpenseDate expenseDate = {props.date} />
        <h2 className='expese-item__description'> {expenseTitle}</h2>
        <div className='expense-item__price'>{`$ ${expenseAmount}`}</div>
    </div>
 ) 
}


export default ExpenseItem