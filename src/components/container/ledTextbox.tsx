import * as React from 'react';
import { ChangeEvent } from 'react';

export interface Props {
  initialNumberOfLeds: number;
}

export interface State {
  currentNumberOfLeds: string;
}

class LedTextbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentNumberOfLeds: props.initialNumberOfLeds.toString() };
    this.handleTextboxChange = this.handleTextboxChange.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currentNumberOfLeds}
          onChange={this.handleTextboxChange}
        />
        <button>Update</button>
      </div>
    );
  }

  private handleTextboxChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      currentNumberOfLeds: event.target.value
    });
  }
}

export default LedTextbox;
