import React from "react";
import "./Col.css";
const Col = ({data,sum}) => {
  return (
    <div className="chartcol">
      <div className="maincol">
        <div style={{height:data.amount/sum*100 +'%'}}></div>
      </div>
      <div className="colmonth">{data.month}</div>
    </div>
  );
};

export default Col;
