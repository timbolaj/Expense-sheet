import React, { useState } from 'react';
import Row from '../Rows';
import handleChange from '../../Helpers/handleChange';

export default function Loans(props) {

  const [total, setLocalTotal] = useState(Number(0));
  const { setTotal, setProfit } = props;

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
          <Row
            onChange={(val) => handleChange(setTotal, setLocalTotal, val)}
            total={total} />
        </tr>
        <tr>
          <td>Personal</td>
          <Row
            onChange={(val) => handleChange(setTotal, setLocalTotal, val)}
            total={total} />
        </tr>
        <tr>
          <td>Total:</td>
          <td>
            <textarea
              id="loan-total"
              className="total"
              value={total}>
            </textarea>
          </td>
        </tr>
      </table>
    </div>
  )
}