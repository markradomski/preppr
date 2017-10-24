import Expo from 'expo';
import React, { Component } from 'react';
import App from './config/router';

const screenProps = {
  id: 'root'
};

class Preppr extends Component {
  render() {
    return <App screenProps={screenProps} />;
  }
}

Expo.registerRootComponent(Preppr);
