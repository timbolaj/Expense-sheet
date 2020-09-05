import React, { useState } from 'react';
import Row from '../Rows';
import handleChange from '../../Helpers/handleChange';
import getTotal from '../../Helpers/getTotal';

export default function Loans(props) {

  const [total, setTotal] = useState(Number(0));

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
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
            total={total} />
        </tr>
        <tr>
          <td>Personal</td>
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
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