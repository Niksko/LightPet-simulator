import React, { Component } from 'react';
import DataTimeline from './components/DataTimeline.js';
import SettingsPanel from './components/SettingsPanel.js';
import SimulationInput from './components/SimulationInput.js';
import SimulationOutput from './components/SimulationOutput.js';
import './App.css';

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <div className="column-1 column">
          <SimulationOutput/>
          <DataTimeline/>
        </div>
        <div className="column-2 column">
          <SettingsPanel/>
          <SimulationInput/>
        </div>
      </div>
    );
  }
})

export default App;
