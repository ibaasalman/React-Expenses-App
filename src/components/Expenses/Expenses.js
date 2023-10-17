import "./Expenses.css";
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {

  return (
    <Card className="expenses">
        <ExpenseItem
      title={items[0].title}
      price={items[0].price}
      date={items[0].date}
    ></ExpenseItem>
    <ExpenseItem
      title={items[1].title}
      price={items[1].price}
      date={items[1].date}
    ></ExpenseItem>
    <ExpenseItem
      title={items[2].title}
      price={items[2].price}
      date={items[2].date}
    ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
