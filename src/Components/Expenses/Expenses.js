import React from 'react';
import Bills from './Bills';
import Fluctuates from './Fluctuates';
import '../../Styles/Expenses.scss';

export default function Expenses(props) {
  return (
    <div> 
      <h2>Expenses</h2>

      <div className="Expenses">
        <Bills setTotal={props.setTotal}/>
        <Fluctuates setTotal={props.setTotal}/>        
      </div>
    </div>
  )
}