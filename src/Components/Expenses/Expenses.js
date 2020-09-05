import React from 'react';
import Bills from './Bills';
import Fluctuates from './Fluctuates';
import '../../Styles/Expenses.scss';

export default function Expenses(props) {
  return (
    <div> 
      <h2>Expenses</h2>

      <div className="Expenses">
        <Bills newTotal={props.newTotal}/>
        <Fluctuates newTotal={props.newTotal}/>        
      </div>
    </div>
  )
}