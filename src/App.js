import React, { Component } from 'react';
import Color from 'color';
import LEDContainer from './components/LEDContainer.js';
import './App.css';

var numLeds = 9;
var ledArray = [];
for (var i = 0; i < numLeds; i++) {
  var col = Color().red(255 * Math.random()).green(255 * Math.random()).green(255 * Math.random());
  ledArray.push({
    id: i,
    color: col
  });
}

var App = React.createClass({
  alterColors: function() {
    ledArray.forEach((ledObj, index, array) => {
      ledObj.color = ledObj.color.clone().rotate(1);
    });
    this.setState({leds: ledArray});
  },

  getInitialState: function() {
      return {
        leds: ledArray,
        layout: 'concentric'
      };
  },

  componentDidMount: function() {
    setInterval(this.alterColors, 10);
  },

  render: function() {
    return (
      <div className="App">
        <LEDContainer leds={this.state.leds} layout={this.state.layout}/>
      </div>
    );
  }
})

export default App;
