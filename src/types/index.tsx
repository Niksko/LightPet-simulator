import { LedArranger } from '../components/led/LayoutSelector.Container';
import { DataPoint } from '../interfaces/DataPoint';

export interface StoreState {
  dataStart: number;
  dataEnd: number;
  data: Array<DataPoint>;
  ledArranger: LedArranger;
  numberOfLeds: number;
}