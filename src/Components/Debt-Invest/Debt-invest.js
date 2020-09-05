import React from 'react';
import Investments from './Investments';
import Loans from './Loans';
import '../../Styles/Debt-invest.scss';

export default function DebtInvest(props) {
  return (
    <div>
      <h2>Debt-Invest</h2>
      <div className="debt-invest">
        <Loans setTotal={props.setTotal}/>
        <Investments setTotal={props.setTotal}/>        
      </div>

    </div>
  )
}