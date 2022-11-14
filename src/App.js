
import { useState } from 'react';
import './App.css';

import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExpenses/NewExpenses';


const expenseData = [
  {
    id: 'el1',
    date: new Date(2023, 8, 31),
    title:  "Car Insurance",
    amount: 200,
  },
  {
    id: 'el2',
    date: new Date(2022, 3, 2),
    title:  "KinderGarden",
    amount: 100,
  },
  {
    id: 'el3',
    date: new Date(2021, 11, 22),
    title:  "Utitilties",
    amount: 100,
  },
  {
    id: 'el4',
    date: new Date(),
    title:  "Tolet paper",
    amount: 100,
  },
 ];

function App() {
  const [totalExpenses, setExpenses] = useState(expenseData)



   const getExpenseDataHandler = (liftingData ) => {
       setExpenses((prevState) => {
        return [liftingData, ...prevState]
       }) 
   }


  return (
    <div className="App">
      <NewExpenses onGet = {getExpenseDataHandler} />
      <Expenses  expenses={totalExpenses}/>
    </div>
  );
}

export default App;
