import { StoreState } from '../types';
import { UpdateLedAction } from '../actions/actions';
import * as constants from '../constants';
import { LedArranger } from '../components/led/LayoutSelector.Container';
import LEDData from '../interfaces/LEDData';
import * as Konva from 'konva';

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

export function updateLed(state: StoreState, action: UpdateLedAction): StoreState {
  let newLedArray: Array<LEDData>;
  switch (action.type) {
    case constants.UPDATE_NUMBER_OF_LEDS:
      newLedArray = ledUpdateFunction(action.newNumberOfLeds, state.ledArranger);
      return { ...state, ledArray: newLedArray, numberOfLeds: action.newNumberOfLeds};
    case constants.UPDATE_LED_LAYOUT:
      newLedArray = ledUpdateFunction(state.numberOfLeds, action.newLedArranger);
      return { ...state, ledArray: newLedArray, ledArranger: action.newLedArranger};
    default:
      return state;
  }
}
