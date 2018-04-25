import { LedArranger } from '../components/led/LayoutSelector.Container';
import * as Konva from 'konva';
import LEDData from '../interfaces/LEDData';
import { createSelector } from 'reselect';
import { StoreState } from '../types';

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
  return state.numberOfLeds;
};

const getLedArranger = (state: StoreState) => {
  return state.ledArranger;
};

export const ledUpdateSelector = createSelector(
  [getNumberOfLeds, getLedArranger],
  ledUpdateFunction
);