import React from "react";

const MiniLedList = (props) => {
  let miniLeds = [];
  for(let i = 0; i <= props.volumeSteps; i++) {
    miniLeds.push(<div className="led volume-led-1 led--on"></div>);
  }
  return miniLeds;
}

export default MiniLedList;