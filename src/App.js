import React, { useState } from 'react';
import './App.scss';
import Nav from './Components/Nav';
import Expenses from './Components/Expenses/Expenses';
import DebtInvest from './Components/Debt-Invest/Debt-invest';
import TotalExpenditure from './Components/Total-Expenditures';

function App() {

  const [total, setTotal] = useState(Number(0));
  const [profit, setProfit] = useState(Number(0));

  return (
    <div className="app">
      <Nav />
      <div className="inputs">
        <Expenses
          setTotal={setTotal}
          setProfit={setProfit}
          profit={profit}
        />
        <DebtInvest
          setTotal={setTotal}
          setProfit={setProfit}
          profit={profit}
        />
      </div>
      <TotalExpenditure
        total={total}
        profit={profit}
        setProfit={setProfit} />
    </div>
  );
}

export default App;