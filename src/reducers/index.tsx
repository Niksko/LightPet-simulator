import { GraphState, LedState } from '../types';
import { UpdateGraphAction, UpdateLedAction } from '../actions/actions';
import * as constants from '../constants';

export function updateLedState(state: LedState, action: UpdateLedAction): LedState {
  switch (action.type) {
    case constants.UPDATE_NUMBER_OF_LEDS:
      return {
        ...state,
        numberOfLeds: action.newNumberOfLeds
      };
    case constants.UPDATE_LED_LAYOUT:
      return { ...state, ledArranger: action.newLedArranger};
    default:
      return state || null;
  }
}

export function updateGraphState(state: GraphState, action: UpdateGraphAction): GraphState {
  switch (action.type) {
    case constants.UPDATE_GRAPH_DETAIL_START:
      return {
        ...state,
        dataStart: action.newStart
      };
    case constants.UPDATE_GRAPH_DETAIL_END:
      return {
        ...state,
        dataEnd: action.newEnd
      };
    default:
      return state || null;
  }
}
