import React from "react";
import './Chart.css';
import Col from "./Col";



const Chart = ({items})=>{
    const months = [
        {month:"Jan", amount : 0},
        {month:"Feb", amount : 0},
        {month:"Mar", amount : 0},
        {month:"Apr", amount : 0},
        {month:"May", amount : 0},
        {month:"Jun", amount : 0},
        {month:"Jul", amount : 0},
        {month:"Aug", amount : 0},
        {month:"Sep", amount : 0},
        {month:"Oct", amount : 0},
        {month:"Nov", amount : 0},
        {month:"Dec", amount : 0},
    ]
    let sum = 0;

    items.map(i=>{
        months[(new Date(i.date)).getMonth()].amount += +i.price;
        sum += +i.price;
    })

    return <div className="chart">
        {months.map((m,index)=>{
           return  <Col key={index} data={m} sum={sum}/>
        })}       
    </div>
}

export default Chart;
