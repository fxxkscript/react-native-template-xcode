// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './components/layout';
import store from './store';
import ApplicationNavigator from './navigation/containers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <ApplicationNavigator />
        </Layout>
      </Provider>
    );
  }
}


export default App;