import * as React from 'react';
import './App.css';
import LEDHolder from './components/led/LEDHolder.Container';
import { DataPoint, DataKey }  from './interfaces/DataPoint';
import * as Moment from 'moment';
import GraphView from './components/dataVisualisation/GraphView.Container';
import LEDData from './interfaces/LEDData';
import LedTextbox from './components/led/LedTextbox.Container';
import { LayoutSelector, LedArranger } from './components/led/LayoutSelector.Container';
import { StoreState } from './types';
import { connect, Dispatch } from 'react-redux';
import * as actions from './actions/actions';

const holderWidth = 500;
const holderHeight = 500;

let dummyData: Array<DataPoint> = [];
for (let i = 0; i < 100; i++) {
  dummyData.push({ timestamp: Moment(), [DataKey]: Math.random()});
}

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

const ConnectedLEDHolder = connect(mapStateToLEDHolderProps)(LEDHolder);
const ConnectedLedTextbox = connect(null, mapDispatchToLedTextboxProps)(LedTextbox);
const ConnectedLayoutSelector = connect(null, mapDispatchToLayoutSelectorProps)(LayoutSelector);

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
        <GraphView width={400} height={400} data={dummyData} />
      </div>
    );
  }
}

export default App;
