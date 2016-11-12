import React, { Component } from 'react';
import ReactPIXI from 'react-pixi';
import PIXI from 'pixi.js';

var Stage = ReactPIXI.Stage;

var SimulationOutput = React.createClass({
  render: function() {
    return (
      <div className="SimulationOutput main-component">
        <Stage width={this.props.width} height={this.props.height}>
        </Stage>
      </div>
    );
  }
});

export default SimulationOutput;
