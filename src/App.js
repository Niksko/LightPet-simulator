import React, { Component } from 'react';
import Color from 'color';
import LEDContainer from './components/LEDContainer.js';
import './App.css';

var ledArray = [
  {
    id: 0,
    size: 60,
    color: Color().blue(255).red(50).green(200),
    position: {
      left: 30,
      top: 100
    }
  },
  {
    id: 1,
    size: 30,
    color: Color().red(120),
    position: {
      left: 200,
      top: 600
    }
  },
  {
    id: 2,
    size: 45,
    color: Color().green(20),
    position: {
      left: 600,
      top: 800
    }
  }
]

var App = React.createClass({
  alterColors: function() {
    ledArray.forEach((ledObj, index, array) => {
      ledObj.color = ledObj.color.clone().rotate(1);
    });
    this.setState({leds: ledArray});
  },

  getInitialState: function() {
      return {
        leds: ledArray
      };
  },

  componentDidMount: function() {
    setInterval(this.alterColors, 10);
  },

  render: function() {
    return (
      <div className="App">
        <LEDContainer leds={this.state.leds}/>
      </div>
    );
  }
})

export default App;
