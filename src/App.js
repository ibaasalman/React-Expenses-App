import "./App.css";
import {useState} from "react";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Filter from "./components/Filter/FilterOption";
import Chart from "./components/Chart/Chart";

const dummy_items = [
  {id:"e1", title: "coffe", price: 24, date: "3-15-2023" },
  {id:"e2", title: "rent", price: 110, date: "12-12-2023" },
  {id:"e3", title: "gym subscripton", price: 80, date: "1-11-2023" },
  {id:"e4", title: "Netflix subscripton", price: 99.9, date: "1-5-2022" },
  {id:"e5", title: "shoe", price: 120, date: "6-2-2022" },
];

function App() {

  const [items,setItems] = useState(dummy_items);

  // returning the uniqe years from items 
  const years = [...new Set(items.map(i=>{
    return +((new Date(i.date)).getFullYear())
  }))]
  
  const [year,setYear] = useState(Math.max(...years))

  const newExpenseHandler = (res) => {
    setItems(snap=>{
      return [res,...snap]
    })
  };

  const changeYearHandler = (res) =>{
    setYear(res.target.value)
  }

  const filteredItems = items.filter((i)=>{
   return year == (new Date(i.date).getFullYear())
  })

  return (
    <div>
      <Card className="App flex">
        <NewExpense newExpenseHandler={newExpenseHandler} />
        <Chart items={filteredItems}/>
      </Card>
      <Card className="App">
        <h1>Expenses Tracker 📟</h1>
        <Filter years={years} year={year} changeYearHandler={changeYearHandler}/>
        <Expenses items={filteredItems} />
      </Card>
    </div>
  );
}

export default App;
