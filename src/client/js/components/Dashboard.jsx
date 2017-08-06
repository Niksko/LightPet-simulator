/*
 * This is the main dashboard component. We create a letter display and attach some styling to it
 */
'use-strict';
import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Card from 'react-toolbox/lib/card';

import styles from './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div className = {styles.flexcontainer} >
        <AppBar
          title="LightPet Simulator"
          className = {styles.appbar} >
        </AppBar>
      </div>
    );
  };
}

Dashboard.contextTypes = {
  store: React.PropTypes.object
};

export default Dashboard;
