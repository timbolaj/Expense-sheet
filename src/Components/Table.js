import React from 'react';
import Row from './Rows';
import '../Styles/Table.scss';

export default function Table() {
  return (
    <div className="Table">
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