import * as React from 'react';
import { LineChart, Line } from 'recharts';
import { DataPoint, DataKey } from '../../interfaces/DataPoint';

export interface Props {
  data: Array<DataPoint>;
  width: number;
  height: number;
  stroke: string;
}

function GraphDetailViewer({ data, width, height, stroke }: Props) {
  return (
    <LineChart width={width} height={height} data={data}>
      <Line type={'monotone'} dataKey={DataKey} stroke={stroke} isAnimationActive={false}/>
    </LineChart>
  );
}

export default GraphDetailViewer;