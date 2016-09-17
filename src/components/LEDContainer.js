import React, { Component } from 'react';
import LED from './LED.js';

class LEDContainer extends Component {
  render() {
    return (
      <div className="LEDContainer">
        {this.props.leds.map(led => {
          return ( <LED key={led.id} position={led.position} size={led.size} color={led.color}/> );
        })}
      </div>
    );
  }
}

export default LEDContainer;
