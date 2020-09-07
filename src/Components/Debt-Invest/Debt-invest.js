import React from 'react';
import Investments from './Investments';
import Loans from './Loans';
import '../../Styles/Debt-invest.scss';

export default function DebtInvest(props) {
 
  const { setTotal, setProfit, totalExpense} = props;
  
  return (
    <div>
      <h2>Debts/Investment</h2>
      <div className="debt-invest">
        <Loans
          setTotal={setTotal}
          setProfit={setProfit}
          totalExpense={totalExpense}
        />
        <Investments
          setTotal={setTotal}
          setProfit={setProfit}
          totalExpense={totalExpense}
        />        
      </div>
    </div>
  )
}