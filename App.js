import { View, Text, StatusBar, LogBox } from 'react-native';
import React from 'react';
import Navigator from './Navigator';

LogBox.ignoreAllLogs('registerError')
const App = () => {
  return (
    <>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        // barStyle='dark-content'
        // hidden
      />
      <Navigator/>
    </>
  );
};

export default App;
