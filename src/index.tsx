import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { StoreState } from './types';
import { createStore } from 'redux';
import { updateLed } from './reducers';
import { Provider } from 'react-redux';
import * as Konva from 'konva';
import { randomLayout } from './ledArrangers';

const initialNumberOfLeds: number = 20;

const store = createStore<StoreState>(updateLed, {
  dataStart: 0,
  dataEnd: 100,
  ledArray: randomLayout(initialNumberOfLeds)
    .map(value => {
      return { x: value.x, y: value.y, color: Konva.Util.getRandomColor() };
    }),
  ledArranger: randomLayout,
  numberOfLeds: initialNumberOfLeds
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
