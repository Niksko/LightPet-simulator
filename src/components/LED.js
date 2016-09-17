import React, { Component } from 'react';

// This is an LED class that will be used to place LEDs around the screen
// These LEDs should have their color updated via some inline CSS
class LED extends Component {
  render() {
    return (
      <div className="LED" style={this.props.style} />
    );
  }
}

export default LED;
