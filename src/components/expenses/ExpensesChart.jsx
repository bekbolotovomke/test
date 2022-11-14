import React from "react";
import Chart from "../chart/Chart";


const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Fed', value: 0},
        {label: 'Mach', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jal', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth() //0 Jan
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return (
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart