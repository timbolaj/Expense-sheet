import React, { useState } from 'react';
import Row from '../Rows';
import handleChange from '../../Helpers/handleChange';

export default function Investments(props) {

  const [total, setLocalTotal] = useState(Number(0));
  const { setTotal, setProfit } = props;

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
          <Row
            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit, total)}
            total={total} />
        </tr>

        <tr>
          <td>Long-term</td>
          <Row
            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit, total)}
            total={total} />
        </tr>

        <tr>
          <td>Total:</td>
          <textarea
              id="investment-total"
              className="total"
              value={total}>
          </textarea>
        </tr>
      </table>
    
    </div>
  )
}