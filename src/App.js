import React from 'react';
import './App.scss';
import Expenses from './Components/Expenses/Expenses';
import DebtInvest from './Components/Debt-Invest/Debt-invest';

function App() {
  return (
    <div>
      <h1>Expense Sheet</h1>
      <div className="App">
        <Expenses />
        <DebtInvest />        
      </div>
    </div>
  );
}

export default App;