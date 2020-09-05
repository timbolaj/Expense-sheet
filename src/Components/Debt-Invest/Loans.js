import React from 'react';
import Row from '../Rows';

export default function Loans() {
  return (
    <div>
      <h2>Loans</h2>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>Government</td>
          <Row />
        </tr>
        <tr>
          <td>Personal</td>
          <Row />
        </tr>
        <tr>
          <td>Total:</td>
          <Row />
        </tr>
      </table>
    </div>
  )
}