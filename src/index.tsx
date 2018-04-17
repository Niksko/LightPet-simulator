import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { StoreState } from './types';
import { createStore } from 'redux';
import { updateLed } from './reducers';
import { Point } from './components/led/LayoutSelector.Container';
import { Provider } from 'react-redux';
import * as Konva from 'konva';

const randomArranger = (numberOfLeds: number): Array<Point> => {
  let ledArray: Array<Point> = [];
  for (let i = 0; i < numberOfLeds; i++) {
    ledArray.push({
      x: Math.random(),
      y: Math.random()
    });
  }
  return ledArray;
};

const initialNumberOfLeds: number = 20;

const store = createStore<StoreState>(updateLed, {
  dataStart: 0,
  dataEnd: 100,
  ledArray: randomArranger(initialNumberOfLeds)
    .map(value => {
      return { x: value.x, y: value.y, color: Konva.Util.getRandomColor() };
    }),
  ledArranger: randomArranger,
  numberOfLeds: initialNumberOfLeds
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
