import * as React from 'react';
import { ChangeEvent, MouseEvent } from 'react';

export interface Props {
  initialNumberOfLeds: number;
  updateNumberOfLeds: (newValue: number) => void;
}

export interface State {
  currentNumberOfLeds: string;
  errorMessage: string;
}

class LedTextbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentNumberOfLeds: props.initialNumberOfLeds.toString(),
      errorMessage: ''
    };
    this.handleTextboxChange = this.handleTextboxChange.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currentNumberOfLeds}
          onChange={this.handleTextboxChange}
        />
        <button
          onClick={this.handleUpdateClick}
        >
          Update
        </button>
        <div>
          {this.state.errorMessage}
        </div>
      </div>
    );
  }

  private handleTextboxChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      currentNumberOfLeds: event.target.value
    });
  }

  private handleUpdateClick(event: MouseEvent<HTMLButtonElement>): void {
    const updatedNumberOfLeds = parseInt(this.state.currentNumberOfLeds, 10);

    if (isNaN(updatedNumberOfLeds)) {
      this.setState({
        errorMessage: 'Unable to parse your input as an integer. Please enter integers.'
      });
    } else {
      this.setState({
        errorMessage: ''
      });
      this.props.updateNumberOfLeds(updatedNumberOfLeds);
    }
  }
}

export default LedTextbox;
