import React, { useState } from 'react';
import './App.scss';
import Expenses from './Components/Expenses/Expenses';
import DebtInvest from './Components/Debt-Invest/Debt-invest';
import TotalExpenditure from './Components/Total-Expenditures';

function App() {

  const [total, setTotal] = useState(Number(0));

  return (
    <div className="app">
      <h1>Expense Sheet</h1>
      <div className="inputs">
        <Expenses setTotal={setTotal}/>
        <DebtInvest setTotal={setTotal}/>
      </div>
      <TotalExpenditure total={total} />
    </div>
  );
}

export default App;