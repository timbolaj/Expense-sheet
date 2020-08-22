import React from 'react';
import Row from './Rows';

export default function Bills() {
  return (
    <div>
      <h3>Bills</h3>
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

      </table>
    </div>
  )
}