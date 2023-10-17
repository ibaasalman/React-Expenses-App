import "./App.css";
import {useState} from "react";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_items = [
  { title: "coffe", price: 1.4, date: "3-15-2023" },
  { title: "rent", price: 450, date: "12-12-2022" },
  { title: "gym subscripton", price: 80, date: "1-11-2023" },
];

function App() {

  const [items,setItems] = useState(dummy_items);

  const newExpenseHandler = (res) => {
    setItems(snap=>{
      return [res,...snap]
    })
  };

  return (
    <div>
      <Card className="App">
        <NewExpense newExpenseHandler={newExpenseHandler} />
      </Card>
      <Card className="App">
        <h1>Expenses Tracker 📟</h1>
        <Expenses items={items} />
      </Card>
    </div>
  );
}

export default App;
