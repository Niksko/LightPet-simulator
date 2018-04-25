import * as React from 'react';
import GraphDetailViewer from './GraphDetailViewer.Presentational';
import { DataPoint } from '../../interfaces/DataPoint';
import GraphOverview from './GraphOverview.Presentational';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../types';
import { graphDetailViewSelector } from '../../selectors';
import * as actions from '../../actions/actions';

export interface Props {
  data: Array<DataPoint>;
  width: number;
  height: number;
}

export interface State {
  dataStart: number;
  dataEnd: number;
}

const mapStateToGraphDetailViewerProps = (state: StoreState) => {
  return {
    data: graphDetailViewSelector(state)
  };
};

const mapDispatchToGraphOverviewProps = (dispatch: Dispatch<actions.UpdateGraphAction>) => {
  return {
    updateGraphStart: (newStart: number) => dispatch(actions.updateGraphDetailStart(newStart))
  };
};

const mapStateToGraphOverviewProps = ({graphState}: StoreState) => {
  return {
    data: graphState.data
  };
};

const ConnectedGraphDetailViewer = connect(mapStateToGraphDetailViewerProps)(GraphDetailViewer);
const ConnectedGraphOverview = connect(mapStateToGraphOverviewProps, mapDispatchToGraphOverviewProps)(GraphOverview);

class GraphView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div>
        <ConnectedGraphOverview
          width={this.props.width}
          height={this.props.height}
          stroke={'#00ff00'}
        />
        <ConnectedGraphDetailViewer
          width={this.props.width}
          height={this.props.height}
          stroke={'#ff0000'}
        />
      </div>
    );
  }
}

export default GraphView;