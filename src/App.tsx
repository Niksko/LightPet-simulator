import * as React from 'react';
import './App.css';
import * as Konva from 'konva';
import LEDHolder from './components/container/LEDHolder';

const holderWidth = 500;
const holderHeight = 500;

let ledArray: Array<[number, number, string]> = [];
for (let i = 0; i < 10; i++) {
  ledArray.push([Math.random() * holderWidth, Math.random() * holderHeight, Konva.Util.getRandomColor()]);
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LEDHolder width={holderWidth} height={holderHeight} ledSize={30} leds={ledArray}/>
      </div>
    );
  }
}

export default App;
