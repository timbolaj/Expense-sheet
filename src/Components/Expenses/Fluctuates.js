import React, { useState } from 'react';
import Row from '../Rows';
import handleChange from '../../Helpers/handleChange';
import getTotal from '../../Helpers/getTotal';

export default function Fluctuates(props) {

  const [total, setTotal] = useState(Number(0));

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
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Food</td>
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Social</td>
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Household needs</td>
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Transportation</td>
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Other</td>
          <Row
            onChange={(val) => handleChange(props.newTotal, setTotal, getTotal, val)}
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