import { LedArranger } from '../components/led/LayoutSelector.Container';
import { DataPoint } from '../interfaces/DataPoint';

export interface StoreState {
  graphState: GraphState;
  ledState: LedState;
}

export interface GraphState {
  dataStart: number;
  dataEnd: number;
  data: Array<DataPoint>;
}

export interface LedState {
  ledArranger: LedArranger;
  numberOfLeds: number;
}
