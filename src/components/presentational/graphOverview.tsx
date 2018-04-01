import * as React from 'react';
import { LineChart, Line } from 'recharts';
import { DataPoint, DataKey } from '../../interfaces/DataPoint';
import Draggable, { DraggableData, DraggableEventHandler } from 'react-draggable';

type updateDetailEndpointsFunctionType = (start: number, end: number) => void;

export interface Props {
  data: Array<DataPoint>;
  width: number;
  height: number;
  stroke: string;
  updateDetailEndpointsFunction: updateDetailEndpointsFunctionType;
}

const getDragHandlerForUpdateFunction = (updateFunction: updateDetailEndpointsFunctionType): DraggableEventHandler => {
  return (e: Event, data: DraggableData): void => {
    updateFunction(data.x, data.y);
  };
};

function GraphOverview({ data, width, height, stroke, updateDetailEndpointsFunction}: Props) {
  const onDragHandler = getDragHandlerForUpdateFunction(updateDetailEndpointsFunction);

  return (
    <div style={{position: 'relative'}}>
      <LineChart className="chart" width={width} height={height} data={data}>
        <Line type={'monotone'} dataKey={DataKey} stroke={stroke} />
      </LineChart>
      <Draggable
        axis={'x'}
        bounds={'.chart'}
        grid={[25, 25]}
        onDrag={onDragHandler}
      >
        <div
          style={{
          display: 'inline-block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '5px',
          height: '100%',
          backgroundColor: 'blue'}}
        />
      </Draggable>
    </div>
  );
}

export default GraphOverview;
