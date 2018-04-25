import * as React from 'react';
import { ChangeEvent } from 'react';
import { UpdateLedLayout } from '../../actions/actions';

export type Point = {
  x: number;
  y: number;
};

export type LedArranger = (numberOfLedsToLayout: number) => Array<Point>;

// TODO: Split these out into a module for max reuse
const gridLayout: LedArranger = (numberOfLedsToLayOut) => {
  const gridSize = Math.ceil(Math.sqrt(numberOfLedsToLayOut));
  const ledPositions: Array<Point> = [];
  let ledsLaidOut = 0;
  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize && ledsLaidOut < numberOfLedsToLayOut; column++) {
      ledPositions.push({
        x: ((column * 2) + 1) / ((gridSize * 2) + 1),
        y: ((row * 2) + 1) / ((gridSize * 2) + 1),
      });
    }
  }
  return ledPositions;
};

const circleLayout: LedArranger = (numberOfLedsToLayOut) => {
  const circleRadius = 0.4;
  const ledPositions: Array<Point> = [];
  for (let angle = 0; angle < 2 * Math.PI; angle += (2 * Math.PI / numberOfLedsToLayOut)) {
    ledPositions.push({
      x: (Math.cos(angle) / (1 / circleRadius)) + 0.5,
      y: (Math.sin(angle) / (1 / circleRadius)) + 0.5
    });
  }
  return ledPositions;
};

const randomLayout: LedArranger = (numberOfLedsToLayout) => {
  const ledPositions: Array<Point> = [];
  for (let i = 0; i < numberOfLedsToLayout; i++) {
    ledPositions.push({
      x: Math.random(),
      y: Math.random()
    });
  }
  return ledPositions;
};

const LAYOUTS = {
  'random': {
    description: 'Random layout',
    arrangeLeds: randomLayout
  },
  'grid': {
    description: 'Grid layout',
    arrangeLeds: gridLayout
  },
  'circle': {
    description: 'Circle layout',
    arrangeLeds: circleLayout
  }
};

export interface Props {
  onLayoutSelected: (ledArranger: LedArranger) => UpdateLedLayout;
}

export interface State {
}

export class LayoutSelector extends React.Component<Props, State> {
  render() {
    return(
      <div>
        <select
          onChange={this.handleChange}
        >
          {
            Object.entries(LAYOUTS).map(([key, layout]) => {
              return (
                <option
                  value={key}
                  key={key}
                >
                  {layout.description}
                </option>
              );
            })
          }
        </select>
      </div>
    );
  }

  private handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const ledArranger = LAYOUTS[event.target.value].arrangeLeds;
    this.props.onLayoutSelected(ledArranger);
  }
}
