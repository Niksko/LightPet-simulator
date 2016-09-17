import React, { Component } from 'react';
import Color from 'color';
import LEDContainer from './components/LEDContainer.js';
import './App.css';

var ledArray = [
  {
    id: 0,
    size: 60,
    color: Color().blue(255),
    left: 30,
    top: 100
  },
  {
    id: 1,
    size: 30,
    color: Color().red(120),
    left: 200,
    top: 600
  },
  {
    id: 2,
    size: 45,
    color: Color().green(20),
    left: 600,
    top: 800
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <LEDContainer leds={ledArray}/>
      </div>
    );
  }
}

export default App;
