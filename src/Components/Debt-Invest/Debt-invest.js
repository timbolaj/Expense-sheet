import React from 'react';
import Investments from './Investments';
import Loans from './Loans';
import '../../Styles/Debt-invest.scss';

export default function DebtInvest(props) {
 
  const { setTotal, setProfit, profit } = props;
  
  return (
    <div>
      <h2>Debts/Investment</h2>
      <div className="debt-invest">
        <Loans setTotal={setTotal} setProfit={setProfit} profit={profit}/>
        <Investments setTotal={setTotal} setProfit={setProfit} profit={profit}/>        
      </div>
    </div>
  )
}