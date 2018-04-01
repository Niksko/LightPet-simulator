import { Moment } from 'moment';

export const DataKey = 'value';

export interface DataPoint {
  timestamp: Moment;
  [DataKey]: number;
}