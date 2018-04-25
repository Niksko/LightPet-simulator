import { LedArranger } from '../components/led/LayoutSelector.Container';
import * as Konva from 'konva';
import LEDData from '../interfaces/LEDData';
import { createSelector } from 'reselect';
import { StoreState } from '../types';
import { DataPoint } from '../interfaces/DataPoint';

// TODO: See if this is a duplicate definition
type LedUpdateFunction = (numberOfLeds: number, ledArranger: LedArranger) => Array<LEDData>;

const ledUpdateFunction: LedUpdateFunction = (numberOfLeds: number, ledArranger: LedArranger) => {
  const ledPositions = ledArranger(numberOfLeds);
  const ledArray: Array<LEDData> = [];
  for (let i = 0; i < numberOfLeds; i++) {
    ledArray.push({
      x: ledPositions[i].x,
      y: ledPositions[i].y,
      color: Konva.Util.getRandomColor()
    });
  }
  return ledArray;
};

const getNumberOfLeds = (state: StoreState) => {
  return state.ledState.numberOfLeds;
};

const getLedArranger = (state: StoreState) => {
  return state.ledState.ledArranger;
};

export const ledUpdateSelector = createSelector(
  [getNumberOfLeds, getLedArranger],
  ledUpdateFunction
);

const getDataStart = (state: StoreState) => {
  return state.graphState.dataStart;
};

const getDataEnd = (state: StoreState) => {
  return state.graphState.dataEnd;
};

const getData = (state: StoreState) => {
  return state.graphState.data;
};

export const graphDetailViewSelector = createSelector(
  [getDataStart, getDataEnd, getData],
  (dataStart: number, dataEnd: number, data: Array<DataPoint>): Array<DataPoint> => {
    return data.slice(dataStart, dataEnd);
  }
);