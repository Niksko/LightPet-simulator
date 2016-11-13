import React, { Component } from 'react';
import Color from 'color';
import DataTimeline from './components/DataTimeline.js';
import SettingsPanel from './components/SettingsPanel.js';
import SimulationInput from './components/SimulationInput.js';
import SimulationOutput from './components/SimulationOutput.js';
import './App.css';

let numLeds = 9;
let ledArray = [];
for (let i = 0; i < numLeds; i++) {
  let col = Color().red(255 * Math.random()).green(255 * Math.random()).green(255 * Math.random());
  ledArray.push(col);
}

let App = React.createClass({
  render: function() {
    return (
      <div className='App'>
        <div className='column-1 column'>
          <SimulationOutput leds={ledArray} layout='concentric'/>
          <DataTimeline/>
        </div>
        <div className='column-2 column'>
          <SettingsPanel/>
          <SimulationInput/>
        </div>
      </div>
    );
  }
})

export default App;
