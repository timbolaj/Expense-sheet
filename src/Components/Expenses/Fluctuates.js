import React, { useState } from 'react';
import Row from '../Rows';

export default function Fluctuates() {

  const [total, setTotal] = useState(0);

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
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Food</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Social</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Household needs</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Transportation</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Other</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Total:</td>
          <textarea
              className="total"
              value={total}>
          </textarea>
        </tr>

      </table>
    </div>
  )
}