import React from 'react';
import Bills from './Bills';
import Fluctuates from './Fluctuates';
import '../../Styles/Expenses.scss';

export default function Expenses(props) {

  const { setTotal, setProfit, profit } = props;

  return (
    <div> 
      <h2>Expenses</h2>

      <div className="Expenses">
        <Bills setTotal={setTotal} setProfit={setProfit} profit={profit}/>
        <Fluctuates setTotal={setTotal} setProfit={setProfit} profit={profit}/>
      </div>
    </div>
  )
}