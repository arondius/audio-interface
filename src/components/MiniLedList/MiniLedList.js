import React from "react";
import MiniLed from '../MiniLed/MiniLed';

const MiniLedList = (props) => {
  let miniLeds = [];
  let { volumeSteps } = props;

  if (volumeSteps < 10) { volumeSteps = 10 }
  else if (volumeSteps > 19) volumeSteps = 19;

  for(let i = 0; i < volumeSteps; i++) {
    const isLedOn = ((volumeSteps * (props.volume / 100)) >= i ) ? 'on' : 'off';
    miniLeds.push(<MiniLed index={i} key={i} power={isLedOn}/>);
  }
  return miniLeds;
}

export default MiniLedList;