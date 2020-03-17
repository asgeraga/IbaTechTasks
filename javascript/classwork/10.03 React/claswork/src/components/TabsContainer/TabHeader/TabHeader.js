import React from 'react';

import './TabHeader.scss'

const TabHeader = props => {
  return (
    <span className={'tabs-header'} onClick={props.click}>
      {props.text}
    </span>
  );
};

export default TabHeader;