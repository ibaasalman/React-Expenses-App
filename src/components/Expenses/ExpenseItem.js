import "./ExpenseItem.css";
import Card from "../UI/Card";
import Date from "./Date";
function ExpenseItem({title , date , price}) {
  return (
    <Card className="exitem">
      <Date date={date}></Date>
      <div className="extitle">{title}</div>
      <div className="examount">{price}$</div>
    </Card>
  );
}
export default ExpenseItem;
