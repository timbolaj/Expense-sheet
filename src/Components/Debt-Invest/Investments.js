import React from 'react';
import Row from '../Rows';

export default function Investments() {
  return (
    <div>
      <h2>Investments</h2>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>

        <tr>
          <td>Short-term</td>
          <Row />
        </tr>

        <tr>
          <td>Long-term</td>
          <Row />
        </tr>
      </table>
    
    </div>
  )
}