import * as React from 'react';
import './App.css';
import LEDHolder from './components/led/LEDHolder.Container';
import GraphView from './components/dataVisualisation/GraphView.Container';
import LEDData from './interfaces/LEDData';
import LedTextbox from './components/led/LedTextbox.Container';
import { LayoutSelector, LedArranger } from './components/led/LayoutSelector.Container';
import { StoreState } from './types';
import { connect, Dispatch } from 'react-redux';
import * as actions from './actions/actions';

const holderWidth = 500;
const holderHeight = 500;

export interface Props {
}

export interface State {
  dataStart: number;
  dataEnd: number;
  ledArray: Array<LEDData>;
}

const mapStateToLEDHolderProps = ({ledArray}: StoreState) => {
  return {
    leds: ledArray
  };
};

const mapDispatchToLedTextboxProps = (dispatch: Dispatch<actions.UpdateLedAction>) => {
  return {
    updateNumberOfLeds: (newNumberOfLeds: number) => dispatch(actions.updateNumberOfLeds(newNumberOfLeds))
  };
};

const mapDispatchToLayoutSelectorProps = (dispatch: Dispatch<actions.UpdateLedAction>) => {
  return {
    onLayoutSelected: (newLedArranger: LedArranger) => dispatch(actions.updateLedLayout(newLedArranger))
  };
};

const mapStateToGraphViewProps = ({data}: StoreState) => {
  return {
    data
  };
};

const ConnectedLEDHolder = connect(mapStateToLEDHolderProps)(LEDHolder);
const ConnectedLedTextbox = connect(null, mapDispatchToLedTextboxProps)(LedTextbox);
const ConnectedLayoutSelector = connect(null, mapDispatchToLayoutSelectorProps)(LayoutSelector);
const ConnectedGraphView = connect(mapStateToGraphViewProps)(GraphView);

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div>
          <ConnectedLEDHolder width={holderWidth} height={holderHeight} ledSize={30}/>
          <ConnectedLedTextbox initialNumberOfLeds={20}/>
          <ConnectedLayoutSelector/>
        </div>
        <ConnectedGraphView width={400} height={400} />
      </div>
    );
  }
}

export default App;
