import React from 'react';
import Bills from './Bills';
import Fluctuates from './Fluctuates';

export default function Expenses() {
  return (
    <div className="Expenses">
      <h2>Money Out</h2>
      <Bills />
      <Fluctuates />
    </div>
  )
}