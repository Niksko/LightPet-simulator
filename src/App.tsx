import * as React from 'react';
import './App.css';
import * as Konva from 'konva';
import LEDHolder from './components/container/LEDHolder';
import GraphDetailViewer from './components/presentational/graphDetailViewer';
import { DataPoint, DataKey }  from './interfaces/DataPoint';
import * as Moment from 'moment';

const holderWidth = 500;
const holderHeight = 500;

let ledArray: Array<[number, number, string]> = [];
for (let i = 0; i < 10; i++) {
  ledArray.push([Math.random() * holderWidth, Math.random() * holderHeight, Konva.Util.getRandomColor()]);
}

const dummyData: Array<DataPoint> = [
  {
    timestamp: Moment(),
    [DataKey]: 10
  },
  {
    timestamp: Moment(),
    [DataKey]: 20
  },
  {
    timestamp: Moment(),
    [DataKey]: 40
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LEDHolder width={holderWidth} height={holderHeight} ledSize={30} leds={ledArray}/>
        <GraphDetailViewer
          width={400}
          height={400}
          data={dummyData}
          stroke={'#ff0000'}
        />
      </div>
    );
  }
}

export default App;
