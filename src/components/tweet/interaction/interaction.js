import React from 'react';
import Icon from '../../icon/icon';

import './stylesInteraction.css';

const Interaction = (props) => {
  return (
      <div className="interaction-container">
        <div>{props.source}</div>
        <p>{props.interaction}</p>
      </div>
  )
}

export default Interaction;