import React from 'react';
import './App.scss';
import Expenses from './Components/Expenses/Expenses';
import DebtInvest from './Components/Debt-Invest/Debt-invest';
import TotalExpenditure from './Components/Total-Expenditures';

function App() {
  return (
    <div>
      <h1>Expense Sheet</h1>
      <div className="App">
        <Expenses />
        <DebtInvest />
      </div>
      <TotalExpenditure />
    </div>
  );
}

export default App;