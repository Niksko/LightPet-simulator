import React, { Component } from 'react';
import Color from 'color';
import LED from './LED.js';

var computeBoxShadow = function(color, size) {
  // Create a grey with the luminosity of the color to be used as part of the shadow
  var luminosityColor = Color().hsl(0, 0, color.luminosity() * 100);
  var boxShadowString = Color().rgb(0, 0, 0).alpha(0.1).rgbString() + ' 0px 7px 1px,' + 
                        'inset ' + luminosityColor.rgbString() + ' 0 -1px ' + size / 4 + 'px, ' + color.rgbString() + ' 0 2px 12px';
  return boxShadowString;
}

class LEDContainer extends Component {
  render() {
    return (
      <div className="LEDContainer">
        {this.props.leds.map(led => {
          var boxShadowString = computeBoxShadow(led.color, led.size);
          var ledStyle = {
            // Style stuff related to LED effect and color
            margin: '0 auto',
            backgroundColor: led.color.rgbString(),
            width: led.size,
            height: led.size,
            borderRadius: '50%',
            boxShadow: boxShadowString,
            // Style stuff related to LED position
            left: led.left,
            top: led.top
          };
          console.log(ledStyle);
          return ( <LED key={led.id} style={ledStyle}/> );
        })}
      </div>
    );
  }
}

export default LEDContainer;
