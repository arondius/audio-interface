import React from 'react';
import './VolumeDial.scss';
import VolumeDialLed from '../VolumeDialLed/VolumeDialLed';
import MiniLedList from '../MiniLedList/MiniLedList';

const VolumeDial = (props) => {
  console.log('props', props);
  let { volume, volumeSteps } = props;
  const onVolumeChange = ($event) => {

    console.log('$event.target', $event.target);
    const y = $event.clientY;
    const modifier = 500;

    const changeVolume = (e) => {
      if(e.clientY > y) {
        volume -= (e.clientY / modifier)
        if (volume < 0) volume = 0;
      } else {
        volume += (e.clientY / modifier)
        if (volume > 100) volume = 100;
      }
      return volume;
    }

    $event.target.addEventListener('mousemove', changeVolume);

    $event.target.addEventListener('mouseup', (e) => {
      e.target.removeEventListener('mousemove', changeVolume);
    });
  }

  return (
    <div className="volume">
      <div className="volume-dial" onMouseDown={(e) => onVolumeChange(e)}>
          <VolumeDialLed volume={volume} />
          <MiniLedList volume={volume} volumeSteps={volumeSteps}/>
        </div>
    </div>
  )
}

export default VolumeDial;