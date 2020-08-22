import React from 'react';
import Investments from './Investments';
import Loans from './Loans';

export default function DebtInvest() {
  return (
    <div>
      <h2>Debt-Invest</h2>
      <Loans />
      <Investments />
    </div>
  )
}