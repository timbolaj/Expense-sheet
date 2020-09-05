import React, { useState } from 'react';
import Row from '../Rows';
import handleChange from '../../Helpers/handleChange';
import getTotal from '../../Helpers/getTotal';

export default function Investments(props) {

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
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Long-term</td>
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
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