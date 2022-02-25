import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, IconButton, TextInput } from "react-native-paper";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const colors = {
  primary: "#1B202F",
  primary_young: "#282F45",
  scondary: "#2AE05D",
  thirdty: "#EE4F4F",
  fourthy: "#FFFFFF",
  fivety: "#8B8B8B",
  sixty: "#C4C4C4",
};

const datas = [
  {
    id: 1,
    icon: "cash-plus",
    placeholder: "Jumlah Tagihan",
  },
  {
    id: 2,
    icon: "account",
    placeholder: "Tagih Uang Ke",
  },
  {
    id: 3,
    icon: "book-open",
    iconR: "chevron-right",
    placeholder: "Kategori",
  },
  {
    id: 4,
    icon: "notebook",
    placeholder: "Catatan (Opsional)",
  },
];

function Tagihan() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}}>
        <View
          style={{
            marginHorizontal: 6,
          }}
        >
          {datas.map((item, index) => {
            return (
              <View key={index}>
                <TextInput
                  left={
                    <TextInput.Icon name={item.icon} size={24} color="grey" />
                  }
                  right={
                    <TextInput.Icon name={item?.iconR} size={24} color="grey" />
                  }
                  placeholder={item.placeholder}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  mode="flat"
                  theme={{
                    colors: {
                      text: colors.primary,
                      primary: "grey",
                      placeholder: colors.sixty,
                    },
                  }}
                />
              </View>
            );
          })}
        </View>
      <View style={{flex:1, marginHorizontal:4}}>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            // backgroundColor:'pink',
            borderWidth:1,
            borderColor:'grey',
            borderRadius:6
          }}
          >
          <View style={{
            justifyContent:"center",
            alignItems:"center",
            margin:12
          }}>
            <Text style={{
              fontSize:16,
              textTransform:'uppercase',
              letterSpacing:1
            }}>Kirim Tagihan</Text>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
}

function Bayaran() {
  return (
    <View style={styles.container}>
      <Text>ini Bayaran</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight * 2,
  },
});

function PayChild() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelStyle: "styles.labelStyle",
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "grey",
        tabBarStyle: {
          height: 50,
          position: "absolute",
          borderTopWidth: 0,
          top: 0,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Tagihan"
        component={Tagihan}
        options={{
          headerShown: false,
          tabBarLabel: "Tagih",
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontSize: 18,
          },
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cash-multiple"
              type="simple-line-icon"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          ),
          tabBarActiveBackgroundColor: "rgba(0, 0, 0, 0.19)",
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: "rgba(0, 0, 0, 0.19)",
        }}
      />
      <Tab.Screen
        name="Bayaran"
        component={Bayaran}
        options={{
          headerShown: false,
          tabBarLabel: "Bayar",
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontSize: 18,
          },
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cash-register"
              type="simple-line-icon"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          ),
          tabBarActiveBackgroundColor: "rgba(0, 0, 0, 0.19)",
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: "rgba(0, 0, 0, 0.19)",
        }}
      />
    </Tab.Navigator>
  );
}

export default function index() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="PayChild"
          component={PayChild}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
