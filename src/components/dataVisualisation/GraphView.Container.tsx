import * as React from 'react';
import GraphDetailViewer from './GraphDetailViewer.Presentational';
import { DataPoint } from '../../interfaces/DataPoint';
import GraphOverview from './GraphOverview.Presentational';

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
    this.handleDrag = this.handleDrag.bind(this);
  }

  public render() {
    return (
      <div>
        <GraphOverview
          data={this.props.data}
          width={this.props.width}
          height={this.props.height}
          stroke={'#00ff00'}
          updateDetailEndpointsFunction={this.handleDrag}
        />
        <GraphDetailViewer
          width={this.props.width}
          height={this.props.height}
          data={this.props.data.slice(this.state.dataStart, this.state.dataEnd)}
          stroke={'#ff0000'}
        />
      </div>
    );
  }

  private handleDrag(x: number, y: number) {
    this.setState({
      dataStart: x / 4
    });
  }
}

export default GraphView;