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
      var totalLEDs = this.props.leds.length;
      var ledPositions = concentricLayout(totalLEDs);
      this.props.leds.forEach(function(value, index, array) {
        // Get the position object
        var position = ledPositions[index];
        position.x = String(100 * position.x) + '%';
        position.y = String(100 * position.y) + '%';
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
