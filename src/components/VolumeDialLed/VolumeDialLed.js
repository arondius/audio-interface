import React from 'react'
import './VolumeDialLed.scss';

const VolumeDialLed = (props) => {
  const { volume } = props;

  // Angle Delta between volume at 0 and volume at 100 = 270deg
  const offset = 120;
  const startAngle = 135;
  const endAngle = 405;
  const totalAngle = endAngle - startAngle;
  const currentAngle = ((totalAngle / 100 ) * volume) + startAngle;

  const style = {transform: `rotate(${currentAngle}deg) translate(${offset}px) rotate(90deg)`};

  return (<div className="volume-dial-led" style={style}></div>)
}

export default VolumeDialLed;