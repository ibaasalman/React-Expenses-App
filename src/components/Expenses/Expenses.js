import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((i) => {
        return (
          <ExpenseItem
            title={i.title}
            price={i.price}
            date={i.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}
export default Expenses;
