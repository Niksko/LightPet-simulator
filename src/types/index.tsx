import LEDData from '../interfaces/LEDData';
import { LedArranger } from '../components/led/LayoutSelector.Container';
import { DataPoint } from '../interfaces/DataPoint';

export interface StoreState {
  dataStart: number;
  dataEnd: number;
  data: Array<DataPoint>;
  ledArray: Array<LEDData>;
  ledArranger: LedArranger;
  numberOfLeds: number;
}