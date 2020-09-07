import React, { useState } from 'react';
import '../Styles/Total-Expenditures.scss';

export default function TotalExpenditure(props) {

  const { totalExpense, profit, setProfit } = props;
  let income = Number(0);

  const changeIncome = event => {
    if (isNaN(Number(event.target.value))) {
      return;
    }
    income = Number(event.target.value);
    setProfit(income - totalExpense);
  };

  return (
    <div className="TotalExpenditure">
      <p>Your total expenses are: {totalExpense}</p>
        <span className="income-field">
          <p>Enter your income: &nbsp; </p>
          <textarea id="income" onChange={changeIncome}></textarea>          
        </span>
      <p>Your pay minus your expenses are: {profit}</p>
    </div>
  )
}