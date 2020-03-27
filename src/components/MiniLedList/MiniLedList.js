import React from "react";
import MiniLed from '../MiniLed/MiniLed';

const MiniLedList = (props) => {
  let miniLeds = [];
  for(let i = 0; i < props.volumeSteps; i++) {
    const isLedOn = ((props.volumeSteps * (props.volume / 100)) >= i ) ? 'on' : 'off';
    miniLeds.push(<MiniLed index={i} power={isLedOn}/>);
  }
  return miniLeds;
}

export default MiniLedList;