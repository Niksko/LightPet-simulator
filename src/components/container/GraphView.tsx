import * as React from 'react';
import GraphDetailViewer from '../presentational/graphDetailViewer';
import { DataPoint } from '../../interfaces/DataPoint';

export interface Props {
  data: Array<DataPoint>;
  width: number;
  height: number;
}

export interface State {
  dataStart: number;
  dataEnd: number;
}

class GraphView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {dataStart: 0, dataEnd: 100};
  }
  render() {
    return (
      <GraphDetailViewer
        width={this.props.width}
        height={this.props.height}
        data={this.props.data.slice(this.state.dataStart, this.state.dataEnd)}
        stroke={'#ff0000'}
      />
    );
  }
}

export default GraphView;