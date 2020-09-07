import React, { useState } from 'react';
import Row from '../Rows';
import handleChange from '../../Helpers/handleChange';

export default function Fluctuates(props) {

  const [total, setLocalTotal] = useState(Number(0));
  const { setTotal, setProfit } = props;

  return (
    <div className="Fluctuates">
      <h2>Fluctuates</h2>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>

        <tr>
          <td>Electricity</td>
          <Row

            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit)}
            total={total} />
        </tr>

        <tr>
          <td>Food</td>
          <Row

            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit)}
            total={total} />
        </tr>

        <tr>
          <td>Social</td>
          <Row

            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit)}
            total={total} />
        </tr>

        <tr>
          <td>Household needs</td>
          <Row

            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit)}
            total={total} />
        </tr>

        <tr>
          <td>Transportation</td>
          <Row

            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit)}
            total={total} />
        </tr>

        <tr>
          <td>Other</td>
          <Row

            onChange={(val) => handleChange(setTotal, setLocalTotal, val, setProfit)}
            total={total} />
        </tr>

        <tr>
          <td>Total:</td>
          <textarea
              id="fluctuates-total"
              className="total"
              value={total}>
          </textarea>
        </tr>

      </table>
    </div>
  )
}