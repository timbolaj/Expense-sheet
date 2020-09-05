import React, { useState } from 'react';
import '../Styles/Rows.scss';

export default function Row(props) {

  const {onChange, total} = props

  const [value, setValue] = useState(Number(0));

  const handleChange = event => {
    let setTotal = total - value + Number(event.target.value);
    setValue(event.target.value)
    onChange(setTotal);
  }

  return (
    <div className="Row">
      <td
        value={value}
        onChange={handleChange}
      >
        <textarea></textarea>
      </td>
    </div>
  )
}