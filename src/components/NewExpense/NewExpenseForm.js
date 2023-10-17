import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm({newExpenseHandler}) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");

  const inputTitleHandler = (e)=>{
    setInputTitle(e.target.value);
  }

  const inputPriceHandler = (e)=>{
    setInputPrice(e.target.value);
  }

  const inputDateHandler = (e)=>{
    setInputDate(e.target.value);
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    newExpenseHandler({
        id : Math.floor(Math.random() * 1000000),
        title:inputTitle,
        price:inputPrice,
        date:inputDate
    })
    setInputDate("");
    setInputPrice(0);
    setInputTitle("");
  }
  return (
    <form className="NewExpenseForm" onSubmit={submitHandler}>
      <div className="inputWrapper">
        <label>Title 🖋</label>
        <input type="text" name="title" placeholder="Expense name" value={inputTitle} onChange={inputTitleHandler}/>
      </div>

      <div className="inputWrapper">
        <label>Cost 💵</label>
        <input type="number" name="price" placeholder="cost" step="0.01" value={inputPrice} onChange={inputPriceHandler}/>
      </div>

      <div className="inputWrapper">
        <label>Date 🗓</label>
        <input type="date" name="date" placeholder="at Date" value={inputDate} onChange={inputDateHandler}/>
      </div>

      <input type="submit" name="submit" value="Add New Expense" />
    </form>
  );
}

export default NewExpenseForm;
