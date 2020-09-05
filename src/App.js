import React, { useState } from 'react';
import './App.scss';
import Expenses from './Components/Expenses/Expenses';
import DebtInvest from './Components/Debt-Invest/Debt-invest';
import TotalExpenditure from './Components/Total-Expenditures';

function App() {

  const [total, newTotal] = useState(Number(0));

  return (
    <div>
      <h1>Expense Sheet</h1>
      <div className="App">
        <Expenses newTotal={newTotal}/>
        <DebtInvest newTotal={newTotal}/>
      </div>
      <TotalExpenditure total={total} />
    </div>
  );
}

export default App;