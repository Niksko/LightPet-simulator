import React from 'react';
import concentricLayout from '../modules/LEDLayout.js';
import LED from './LED.js';

var LEDContainer = React.createClass({
  getInitialState: function() {
    return {
      ledPositions: []
    };
  },

  componentWillMount: function() {
    if (this.props.layout === 'concentric') {
      var ledPositions = [];
      var totalLEDs = this.props.leds.length;
      this.props.leds.forEach(function(value, index, array) {
        // Get the position object
        var position = concentricLayout(value.id, totalLEDs);
        position.x = String(100 * (position.x + 1) / 2) + '%';
        position.y = String(100 * (position.y + 1) / 2) + '%';
        // Push onto our state
        ledPositions.push(position);
      }, this);
      this.setState({ledPositions: ledPositions});
    }
  },

  render() {
    return (
      <div className="LEDContainer">
        {this.props.leds.map(led => {
          return ( <LED key={led.id} position={this.state.ledPositions[led.id]} size={20} color={led.color}/> );
        })}
      </div>
    );
  }
})

export default LEDContainer;
