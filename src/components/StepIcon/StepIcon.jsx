import React from 'react';
import './StepIcon.css';


const StepIcon = ({name,status,icon}) => {

  return (
    <li className={"step-wizard-item "+status}>
      <div className={"divIcon "+status}>
        <i className={icon +" icon " + status}></i>
      </div>
      <span className="progress-label">{name}</span>
    </li>
  );
};

export default StepIcon;
