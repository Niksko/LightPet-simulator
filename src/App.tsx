import * as React from 'react';
import './App.css';
import * as Konva from 'konva';
import LEDHolder from './components/led/LEDHolder.Container';
import { DataPoint, DataKey }  from './interfaces/DataPoint';
import * as Moment from 'moment';
import GraphView from './components/dataVisualisation/GraphView.Container';
import LEDData from './interfaces/LEDData';
import LedTextbox from './components/led/LedTextbox.Container';
import { LayoutSelector, LedArranger } from './components/led/LayoutSelector.Container';

const holderWidth = 500;
const holderHeight = 500;

const generateLedArray = (numberOfLeds: number): Array<LEDData> => {
  let ledArray: Array<LEDData> = [];
  for (let i = 0; i < numberOfLeds; i++) {
    ledArray.push({
      x: Math.random() * holderWidth,
      y: Math.random() * holderHeight,
      color: Konva.Util.getRandomColor()
    });
  }
  return ledArray;
};

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

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataStart: 0,
      dataEnd: 100,
      ledArray: generateLedArray(10)
    };
    this.updateNumberOfLeds = this.updateNumberOfLeds.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div>
          <LEDHolder width={holderWidth} height={holderHeight} ledSize={30} leds={this.state.ledArray}/>
          <LedTextbox initialNumberOfLeds={20} updateNumberOfLeds={this.updateNumberOfLeds}/>
          <LayoutSelector onLayoutSelected={this.updateLedArrangement}/>
        </div>
        <GraphView width={400} height={400} data={dummyData} />
      </div>
    );
  }

  private updateNumberOfLeds(newNumberOfLeds: number): void {
    this.setState({
      ledArray: generateLedArray(newNumberOfLeds)
    });
  }

  private updateLedArrangement = (ledArranger: LedArranger): void => {
    // TODO: Make the number of leds dynamic instead of fixed
    const numberOfLeds = 12;
    let ledArray: Array<LEDData> = [];
    let ledPositions = ledArranger(numberOfLeds);
    for (let i = 0; i < numberOfLeds; i++) {
      ledArray.push({
        x: ledPositions[i].x * holderWidth,
        y: ledPositions[i].y * holderHeight,
        color: Konva.Util.getRandomColor()
      });
    }
    this.setState({
      ledArray
    });
  }
}

export default App;
