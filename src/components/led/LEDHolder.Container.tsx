import * as React from 'react';
import { Stage, Layer } from 'react-konva';
import LED from './LED.Presentational';
import LEDData from '../../interfaces/LEDData';

export interface Props {
  width: number;
  height: number;
  ledSize: number;
  leds: Array<LEDData>;
}

class LEDHolder extends React.Component<Props> {
  render() {
    return (
      <Stage width={this.props.width} height={this.props.height}>
        <Layer>
          {this.props.leds.map((value, index) => {
            return (
              <LED
                key={index}
                size={this.props.ledSize}
                x={value.x * this.props.width}
                y={value.y * this.props.height}
                color={value.color}
              />
            );
          })}
        </Layer>
      </Stage>
    );
  }
}

export default LEDHolder;