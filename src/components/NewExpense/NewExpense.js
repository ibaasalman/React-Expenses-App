import React from "react";
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
function NewExpense({newExpenseHandler}){
    return(
        <div className="NewExpense">
            <h1>Add New Expense ✍️</h1>
            <NewExpenseForm newExpenseHandler={newExpenseHandler}/>
        </div>
    )
}

export default NewExpense;