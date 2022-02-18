import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Home from "./home";
import History from "./home/others/history";
import Account from "./home/others/account";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
const colors = {
  primary: "#1B202F",
  scondary: "#2AE05D",
  thirdty: "#EE4F4F",
  fourthy: "#FFFFFF",
  fivety: "#8B8B8B",
  sixty: "#C4C4C4",
};

function Tagihan() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ini Tagihan</Text>
    </View>
  );
}

function PrivateTabNavigator() {

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarLabelStyle: 'styles.labelStyle',
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "grey",
          tabBarStyle: {
            backgroundColor: colors.primary,
            borderWidth: 0,
            height: 70,
            position: "absolute",
            // bottom: 25,
            // left:35,
            // right:35,
            borderRadius:45,
            borderTopWidth:0,
            ...styles.shadow
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              !focused ?
              <MaterialCommunityIcons name="home" type="simple-line-icon" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color={color} />:
              <MaterialCommunityIcons name="home" type="simple-line-icon" size={24} style={{backgroundColor:"#3142D2", borderRadius:8, padding:8}} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              !focused ?
              <MaterialCommunityIcons name="history" type="simple-line-icon" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color={color} />:
              <MaterialCommunityIcons name="history" type="simple-line-icon" size={24} style={{backgroundColor:"#3142D2", borderRadius:8, padding:8}} color="white" />
            ),
            // tabBarButton: (props) => (
            //   <CustomTabNavigator  {...props} />
            // )
          }}
        />
        <Tab.Screen
          name="AkunStack"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              !focused ?
              <MaterialCommunityIcons name="account-outline" type="simple-line-icon" size={24} iconStyle={{paddingBottom:0,paddingTop:0}} color={color} />:
              <MaterialCommunityIcons name="account-outline" type="simple-line-icon" size={24} style={{backgroundColor:"#3142D2", borderRadius:8, padding:8}} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function PrivateNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PrivateTabNavigator" component={PrivateTabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="Tagihan" component={Tagihan} /> 
      <Stack.Screen name="History" component={History} /> 
    </Stack.Navigator>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  labelStyle:{
    fontSize: 10,
    marginBottom: 5,
    marginTop: 0,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height:10
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation:5
  }
  
});
