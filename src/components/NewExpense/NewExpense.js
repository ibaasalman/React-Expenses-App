import React from "react";
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
function NewExpense({newExpenseHandler}){
    return(
        <div className="NewExpense">
            <h2>Add New Expense ✍️</h2>
            <NewExpenseForm newExpenseHandler={newExpenseHandler}/>
        </div>
    )
}

export default NewExpense;