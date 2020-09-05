import React from 'react';
import '../Styles/Total-Expenditures.scss';

export default function TotalExpenditure(props) {

  return (
    <div className="TotalExpenditure">
      Your total expenses are: {props.total}
    </div>
  )
}