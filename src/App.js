import React from 'react';
import './App.scss';
import Expenses from './Components/Expenses/Expenses';
import DebtInvest from './Components/Debt-Invest/Debt-invest';

function App() {
  return (
    <div className="App">
      <Expenses />
      <DebtInvest />
    </div>
  );
}

export default App;