import React, { useState } from 'react';
import Row from '../Rows';

export default function Bills() {

  const [total, setTotal] = useState(Number(0));

  return (
    <div className="Bills">
      <h3>Fixed</h3>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>

        <tr>
          <td>Rent</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Internet</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Cellphone</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Donation</td>
          <Row onChange={setTotal} total={total}/>
        </tr>

        <tr>
          <td>Insurance</td>
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