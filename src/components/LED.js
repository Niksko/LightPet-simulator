import React, { Component } from 'react';
import Color from 'color';

// This computes the box shadow string that gives the LED a nice appearance
var computeBoxShadow = function(color, size) {
  // Create a grey with the luminosity of the color to be used as part of the shadow
  var luminosityColor = Color().hsl(0, 0, color.luminosity() * 100);
  var boxShadowString = Color().rgb(0, 0, 0).alpha(0.1).rgbString() + ' 0px 7px 1px,' + 
                        'inset ' + luminosityColor.rgbString() + ' 0 -1px ' + size / 4 + 'px, ' + color.rgbString() + ' 0 2px 12px';
  return boxShadowString;
}

// This is an LED class that will be used to place LEDs around the screen
class LED extends Component {
  render() {
    var boxShadowString = computeBoxShadow(this.props.color, this.props.size);
    var style = {
      top: this.props.position.top,
      left: this.props.position.left,
      margin: '0 auto',
      backgroundColor: this.props.color.rgbString(),
      width: this.props.size,
      height: this.props.size,
      borderRadius: '50%',
      boxShadow: boxShadowString
    }
    return (
      <div className="LED" style={style} />
    );
  }
}

export default LED;
