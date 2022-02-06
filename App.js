import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import Navigator from './Navigator';

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
