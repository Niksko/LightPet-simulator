import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { StoreState } from './types';
import { createStore } from 'redux';
import { updateLed } from './reducers';
import { Provider } from 'react-redux';
import { randomLayout } from './ledArrangers';
import { DataKey, DataPoint } from './interfaces/DataPoint';
import * as Moment from 'moment';

const initialNumberOfLeds: number = 20;

let initialData: Array<DataPoint> = [];
for (let i = 0; i < 100; i++) {
  initialData.push({ timestamp: Moment(), [DataKey]: Math.random()});
}

const store = createStore<StoreState>(updateLed, {
  dataStart: 0,
  dataEnd: 100,
  data: initialData,
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
