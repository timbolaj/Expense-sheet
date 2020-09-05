import React, { useState } from 'react';
import Row from '../Rows';
import handleChange from '../../Helpers/handleChange'
import getTotal from '../../Helpers/getTotal';

export default function Bills(props) {

  const [total, setLocalTotal] = useState(Number(0));

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
          <Row
            onChange={(val) => handleChange(props.setTotal, setLocalTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Internet</td>
          <Row
            onChange={(val) => handleChange(props.setTotal, setLocalTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Cellphone</td>
          <Row
            onChange={(val) => handleChange(props.setTotal, setLocalTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Donation</td>
          <Row
            onChange={(val) => handleChange(props.setTotal, setLocalTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Insurance</td>
          <Row
            onChange={(val) => handleChange(props.setTotal, setLocalTotal, getTotal, val)}
            total={total} />
        </tr>

        <tr>
          <td>Total:</td>
          <textarea
              id="bills-total"
              className="total"
              value={total}>
          </textarea>
        </tr>

      </table>
    </div>
  )
}