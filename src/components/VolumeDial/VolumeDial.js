import React from 'react';
import './VolumeDial.scss';
import MiniLedList from '../MiniLedList/MiniLedList';

const VolumeDial = (props) => {
  console.log('props', props);
  const { volume, volumeSteps } = props;
  return (
    <div className="volume">
      <div className="volume-dial">
          <div className="volume-dial-led"></div>
          <MiniLedList volume={volume} volumeSteps={volumeSteps} />
        </div>
    </div>
  )
}

export default VolumeDial;