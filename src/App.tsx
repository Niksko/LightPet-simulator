import * as React from 'react';
import './App.css';
import { Stage, Layer } from 'react-konva';
import * as Konva from 'konva';
import LED from './components/presentational/led';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <LED
              size={10}
              x={100}
              y={100}
              color={Konva.Util.getRandomColor()}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
