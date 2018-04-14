import LEDData from '../interfaces/LEDData';
import { LedArranger } from '../components/led/LayoutSelector.Container';

export interface StoreState {
  dataStart: number;
  dataEnd: number;
  ledArray: Array<LEDData>;
  ledArranger: LedArranger;
  numberOfLeds: number;
}