import { StoreState } from '../types';
import { UpdateLedAction } from '../actions/actions';
import * as constants from '../constants';

export function updateLed(state: StoreState, action: UpdateLedAction): StoreState {
  switch (action.type) {
    case constants.UPDATE_NUMBER_OF_LEDS:
      return { ...state, numberOfLeds: action.newNumberOfLeds};
    case constants.UPDATE_LED_LAYOUT:
      return { ...state, ledArranger: action.newLedArranger};
    default:
      return state;
  }
}
