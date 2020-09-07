import React, { useState } from 'react';
import '../Styles/Total-Expenditures.scss';
import payMinusExpense from '../Helpers/payMinusExpense';

export default function TotalExpenditure(props) {

  const { total, setProfit } = props;
  const income = document.getElementById('income').value;
  let profit;

  console.log(income)

  if (!income) {
    profit = 0 - total;
  } else {
    profit = income - total
  }

  return (
    <div className="TotalExpenditure">
      <p>Your total expenses are: {total}</p>
      <p>Enter your income: &nbsp; <textarea id="income" defaultValue="0"></textarea></p>
      <p>Your pay minus your expenses are: {profit}</p>
    </div>
  )
}