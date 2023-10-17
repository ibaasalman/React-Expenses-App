import './Date.css';
import Card from '../UI/Card';
function date ({date}){

    const mydate = new Date(date);
    const month = mydate.toLocaleString('default', { month: 'short' });
    const year = mydate.getFullYear();
    const day = mydate.getUTCDate();
    return (<Card className="date">
         <div className='month'>{month}</div>
         <div>{year}</div>
         <div className='day'>{day}</div>
            </Card>);
}
export default date;