import React, { Component } from 'react';
import 'SimulationOutput';
import 'DataTimeline';
import 'SettingsPanel';
import 'SimulationInput';
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
