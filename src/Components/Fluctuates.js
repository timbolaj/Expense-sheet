import React from 'react';
import '../Styles/Fluctuates.scss';
import Row from './Rows';
export default function Fluctuates() {
  return (
    <div className="Fluctuates">
      <h3>Fluctuates</h3>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>

        <tr>
          <td>Electricity</td>
          <Row />
        </tr>

        <tr>
          <td>Food</td>
          <Row />
        </tr>

        <tr>
          <td>Social</td>
          <Row />
        </tr>

        <tr>
          <td>Household needs</td>
          <Row />
        </tr>

        <tr>
          <td>Transportation</td>
          <Row />
        </tr>

        <tr>
          <td>Other</td>
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