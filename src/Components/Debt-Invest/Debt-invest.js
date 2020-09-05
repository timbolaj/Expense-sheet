import React from 'react';
import Investments from './Investments';
import Loans from './Loans';
import '../../Styles/Debt-invest.scss';

export default function DebtInvest(props) {
  return (
    <div>
      <h2>Debt-Invest</h2>
      <div className="debt-invest">
        <Loans newTotal={props.newTotal}/>
        <Investments newTotal={props.newTotal}/>        
      </div>

    </div>
  )
}