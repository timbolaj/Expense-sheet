import React from 'react';
import Row from './Rows';
import '../Styles/Bills.scss';

export default function Bills() {
  return (
    <div className="Bills">
      <h3>Fixed Bills</h3>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>

        <tr>
          <td>Rent</td>
          <Row />
        </tr>

        <tr>
          <td>Internet</td>
          <Row />
        </tr>

        <tr>
          <td>Cellphone</td>
          <Row />
        </tr>

        <tr>
          <td>Total</td>
          <Row />
        </tr>

      </table>
    </div>
  )
}