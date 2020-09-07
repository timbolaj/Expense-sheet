import React, { useState } from 'react';
import '../Styles/Total-Expenditures.scss';

export default function TotalExpenditure(props) {

  const { total, profit, setProfit } = props;
  let income = Number(0);

  const changeIncome = event => {
    if (isNaN(Number(event.target.value))) {
      return;
    }
    income = Number(event.target.value);
    setProfit(income - total);
  };

  return (
    <div className="TotalExpenditure">
      <p>Your total expenses are: {total}</p>
      <div>
        <p>Enter your income: &nbsp; <textarea id="income" onChange={changeIncome}></textarea></p>
      </div>
      <p>Your pay minus your expenses are: {profit}</p>
    </div>
  )
}