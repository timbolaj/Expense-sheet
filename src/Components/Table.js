import React from 'react';
import Row from './Rows';

export default function Table() {
  return (
    <div>
      <table>
        <tr>
          <th>Description</th>
          <th>Cost</th>          
        </tr>
        <tr>
          <td>
            <Row />
          </td>
          <td>
            <Row />
          </td>
        </tr>
      </table>
    </div>
  )
}