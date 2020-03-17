import React from 'react';

import './TabContent.scss'

const TabContent = props => {
  return (
    <div className={'tabs-content-item'}>
      <p className="tabs-content-text">{props.text}</p>
    </div>
  );
};

export default TabContent;