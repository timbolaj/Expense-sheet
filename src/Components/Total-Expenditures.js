import React, { useState } from 'react';
import '../Styles/Total-Expenditures.scss';
import payMinusExpense from '../Helpers/payMinusExpense';

export default function TotalExpenditure(props) {

  const [difference, setDifference] = useState(0);

  return (
    <div className="TotalExpenditure">
      <p onChange={res => payMinusExpense(res, setDifference, props.total)}>Your total expenses are: {props.total}</p>
      <p>Enter your income: &nbsp; <input id="income" onChange={res => payMinusExpense(res, setDifference, props.total)} defaultValue="0"></input></p>
      <p>Your pay minus your expenses are: {difference}</p>
    </div>
  )
}