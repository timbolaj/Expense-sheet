import React, { useState } from 'react';
import '../Styles/Total-Expenditures.scss';
import payMinusExpense from '../Helpers/payMinusExpense';

export default function TotalExpenditure(props) {

  const { total, profit, setProfit } = props;

  return (
    <div className="TotalExpenditure">
      <p>Your total expenses are: {total}</p>
      <p>Enter your income: &nbsp; <input id="income"></input></p>
      <p>Your pay minus your expenses are: {profit}</p>
    </div>
  )
}