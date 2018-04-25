import * as React from 'react';
import { LineChart, Line } from 'recharts';
import { DataPoint, DataKey } from '../../interfaces/DataPoint';
import Draggable, { DraggableData, DraggableEventHandler } from 'react-draggable';
import { UpdateGraphDetailEnd, UpdateGraphDetailStart } from '../../actions/actions';

type updateGraphStartFunction = (newStart: number) => UpdateGraphDetailStart;
type updateGraphEndFunction = (newStart: number) => UpdateGraphDetailEnd;

export interface Props {
  data: Array<DataPoint>;
  width: number;
  height: number;
  stroke: string;
  updateGraphStart: updateGraphStartFunction;
//  updateGraphEnd: updateGraphEndFunction;
}

const getDragHandlerForUpdateFunction =
  (updateFunction: updateGraphStartFunction | updateGraphEndFunction)
    : DraggableEventHandler => {
  return (e: Event, data: DraggableData): void => {
    updateFunction(data.x / 4);
  };
};

function GraphOverview({ data, width, height, stroke, updateGraphStart}: Props) {
  const onDragHandler = getDragHandlerForUpdateFunction(updateGraphStart);

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
