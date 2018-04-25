import * as constants from '../constants';
import { LedArranger } from '../components/led/LayoutSelector.Container';

export interface UpdateNumberOfLeds {
  type: constants.UPDATE_NUMBER_OF_LEDS;
  newNumberOfLeds: number;
}

export interface UpdateLedLayout {
  type: constants.UPDATE_LED_LAYOUT;
  newLedArranger: LedArranger;
}

export interface UpdateGraphDetailStart {
  type: constants.UPDATE_GRAPH_DETAIL_START;
  newStart: number;
}

export interface UpdateGraphDetailEnd {
  type: constants.UPDATE_GRAPH_DETAIL_END;
  newEnd: number;
}

export type UpdateLedAction = UpdateNumberOfLeds | UpdateLedLayout;

export function updateNumberOfLeds(newNumberOfLeds: number): UpdateNumberOfLeds {
  return {
    type: constants.UPDATE_NUMBER_OF_LEDS,
    newNumberOfLeds: newNumberOfLeds
  };
}

export function updateLedLayout(newArranger: LedArranger): UpdateLedLayout {
  return {
    type: constants.UPDATE_LED_LAYOUT,
    newLedArranger: newArranger
  };
}

export type UpdateGraphAction = UpdateGraphDetailEnd | UpdateGraphDetailStart;

export function updateGraphDetailStart(newStart: number): UpdateGraphDetailStart {
  return {
    type: constants.UPDATE_GRAPH_DETAIL_START,
    newStart
  };
}

export function updateGraphDetailEnd(newEnd: number): UpdateGraphDetailEnd {
  return {
    type: constants.UPDATE_GRAPH_DETAIL_END,
    newEnd
  };
}
