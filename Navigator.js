import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from "./screens/landing";
import PrivateNavigator from './screens/Navigator';

const Stack = createStackNavigator();

export default function Navigator() {
  const user = true
  return (
    <NavigationContainer>
      {!user ? 
        <Stack.Navigator headerMode="none">
          <Stack.Screen name='Landing' component={Landing}/>
        </Stack.Navigator>
      :
        <PrivateNavigator/>     
      }
    </NavigationContainer>
  );
}