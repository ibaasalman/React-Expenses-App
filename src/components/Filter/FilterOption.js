import React from "react";
import "./FilterOption.css";
const FilterOption = ({ year, years, changeYearHandler }) => {
  return (
    <div className="filteroption">
      <label htmlFor="year">Filter By Year : </label>
      <select id="year" name="year" onChange={changeYearHandler} defaultValue={year}>
        {years.map((y, index) => {
          return (
            <option vlaue={y} key={index}>
              {y}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterOption;
