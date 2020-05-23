import React from 'react';
import VolumeDial from './components/VolumeDial/VolumeDial';

import './App.scss';

function App() {
  const volume = 100;
  const volumeSteps = 19;

  return (
    <div className="App">
      <VolumeDial volume={volume} volumeSteps={volumeSteps}/>
    </div>
  );
}

export default App;
