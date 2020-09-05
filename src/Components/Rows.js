import React, { useState } from 'react';
import '../Styles/Rows.scss';

export default function Row(props) {

  const {onChange, total} = props

  const [value, setValue] = useState(Number(0));

  const handleChange = event => {
    if (isNaN(Number(event.target.value))) return;
    setValue(event.target.value);
    onChange(total - value + Number(event.target.value));     
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