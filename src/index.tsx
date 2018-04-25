import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { StoreState } from './types';
import { combineReducers, createStore, Reducer } from 'redux';
import { updateGraphState, updateLedState } from './reducers';
import { Provider } from 'react-redux';
import { randomLayout } from './ledArrangers';
import { DataKey, DataPoint } from './interfaces/DataPoint';
import * as Moment from 'moment';

const initialNumberOfLeds: number = 20;

let initialData: Array<DataPoint> = [];
for (let i = 0; i < 100; i++) {
  initialData.push({ timestamp: Moment(), [DataKey]: Math.random()});
}

const rootReducer: Reducer<StoreState> = combineReducers({
  ledState: updateLedState,
  graphState: updateGraphState
});

const store = createStore<StoreState>(rootReducer, {
  ledState: {
    ledArranger: randomLayout,
    numberOfLeds: initialNumberOfLeds
  },
  graphState: {
    dataStart: 0,
    dataEnd: 100,
    data: initialData,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
