/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import Routes from "./routes";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['WebSocket']);

const App = () => {
  return <Routes />;
};

export default App;
