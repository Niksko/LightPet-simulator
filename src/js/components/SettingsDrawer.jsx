'use-strict';

import React from 'react';
import Button from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';

class SettingsDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.render = this.render.bind(this);
  };

  handleToggle() {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div>
        <Button label='Show Drawer' raised accent onClick={this.handleToggle} />
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <h5>This is your Drawer.</h5>
          <p>You can embed any content you want, for example a Menu.</p>
        </Drawer>
      </div>
    );
  }
}

SettingsDrawer.propTypes = {
  active: React.PropTypes.boolean
};

export default SettingsDrawer;
