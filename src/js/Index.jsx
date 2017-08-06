/*
 * This is the root jsx component that binds to the app-root. This also controls the passing of the redux store as
 * a provider to the Dashboard component, which allows all child components to access this redux store.
 */
'use-strict';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard.jsx';

//import getStore from './redux.js';

//getStore()
//  .then((store) => {
    ReactDOM.render(
      //<Provider
       // store={store}>
        <Dashboard/>,
      //</Provider>,
      document.getElementById('app-root')
    );
//  });
