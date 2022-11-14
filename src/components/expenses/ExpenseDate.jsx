import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const date = props.expenseDate;
    const day = date.toLocaleString('es-Us', {day: "2-digit"})
    const month = date.toLocaleString('es-Us', {month: 'long'})
    const year = date.getFullYear()
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date_year">{year}</div>
        </div>
    );
};

export default ExpenseDate