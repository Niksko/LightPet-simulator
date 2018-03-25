import * as React from 'react';
import { Stage, Layer } from 'react-konva';
import LED from '../presentational/led';

export interface Props {
  width: number;
  height: number;
  ledSize: number;
  leds: Array<[number, number, string]>;
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
                x={value[0]}
                y={value[1]}
                color={value[2]}
              />
            );
          })}
        </Layer>
      </Stage>
    );
  }
}

export default LEDHolder;