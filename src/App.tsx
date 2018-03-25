import * as React from 'react';
import './App.css';
import { Stage, Layer } from 'react-konva';
import LED from './components/presentational/led';

interface Window {
  Image: typeof HTMLImageElement;
  innerWidth: number;
  innerHeight: number;
}

declare var window: Window;

class App extends React.Component {
  state = {
    image: HTMLImageElement
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = './led.svg';
    image.onload = () => {
      this.setState({
        image: image
      });
    };
  }
  render() {
    return (
      <div className="App">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <LED
              x={100}
              y={100}
              size={100}
              image={this.state.image}
              red={255}
              blue={0}
              green={0}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
