import React, { useState } from 'react';
import Row from '../Rows';

export default function Investments() {

  const [total, setTotal] = useState(Number(0));

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
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Long-term</td>
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