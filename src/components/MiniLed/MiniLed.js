import React from 'react';
import './MiniLed.scss';

const MiniLed = (props) => {
  // Wether the led is switched on or off
  const className = props.power === 'on' ? 'mini-led--on' : 'mini-led--off';
  // Which led is it? Add one to it to account for zero based index
  const i = props.index + 1;
  return(
    <div className={`mini-led mini-led-${i} ${className}`} />
  )
}

export default MiniLed;