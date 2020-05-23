import React from 'react';
import './VolumeDial.scss';
import VolumeDialLed from '../VolumeDialLed/VolumeDialLed';
import MiniLedList from '../MiniLedList/MiniLedList';

const VolumeDial = (props) => {
  console.log('props', props);
  const { volume, volumeSteps } = props;
  const changeVolume = ($event) => {
    console.log('event', $event);
  }

  return (
    <div className="volume">
      <div className="volume-dial" onMouseDown={(e) => changeVolume(e)}>
          <VolumeDialLed volume={volume} />
          <MiniLedList volume={volume} volumeSteps={volumeSteps}/>
        </div>
    </div>
  )
}

export default VolumeDial;