import * as React from 'react';
import { ChangeEvent } from 'react';
import { UpdateLedLayout } from '../../actions/actions';
import { circleLayout, gridLayout, randomLayout } from '../../ledArrangers';

export type Point = {
  x: number;
  y: number;
};

export type LedArranger = (numberOfLedsToLayout: number) => Array<Point>;

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
