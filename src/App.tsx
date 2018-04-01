import * as React from 'react';
import './App.css';
import * as Konva from 'konva';
import LEDHolder from './components/container/LEDHolder';
import { DataPoint, DataKey }  from './interfaces/DataPoint';
import * as Moment from 'moment';
import GraphView from './components/container/GraphView';

const holderWidth = 500;
const holderHeight = 500;

let ledArray: Array<[number, number, string]> = [];
for (let i = 0; i < 10; i++) {
  ledArray.push([Math.random() * holderWidth, Math.random() * holderHeight, Konva.Util.getRandomColor()]);
}

let dummyData: Array<DataPoint> = [];
for (let i = 0; i < 100; i++) {
  dummyData.push({ timestamp: Moment(), [DataKey]: Math.random()});
}

export interface Props {
}

export interface State {
  dataStart: number;
  dataEnd: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { dataStart: 0, dataEnd: 100 };
  }
  render() {
    return (
      <div className="App">
        <LEDHolder width={holderWidth} height={holderHeight} ledSize={30} leds={ledArray}/>
        <GraphView width={400} height={400} data={dummyData} />
      </div>
    );
  }
}

export default App;
