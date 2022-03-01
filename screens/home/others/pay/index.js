import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, IconButton, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const dataClaims = [
  {
    id: 1,
    icon: "cash-plus",
    placeholder: "Jumlah Tagihan",
    name:'money'
  },
  {
    id: 2,
    icon: "account",
    placeholder: "Tagih Uang Ke",
    name:'claim'
  },
  {
    id: 3,
    icon: "book-open",
    iconR: "chevron-right",
    placeholder: "Kategori",
    name:'category'
  },
  {
    id: 4,
    icon: "notebook",
    placeholder: "Catatan (Opsional)",
    name:'noted'
  },
];

const dataPays = [
  {
    id: 1,
    icon: "cash-plus",
    placeholder: "Jumlah Uang",
  },
  {
    id: 2,
    icon: "account",
    placeholder: "Berikan Uang Ke",
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
  const [FixMoney, setFixMoney] = React.useState('')
  const [form, setForm] = React.useState({})
  const [error, setError] = React.useState({})

  const handleChange = (datas, status) => {
    setForm((data) => ({...data, [status]: datas}))
    setError((data) => ({...data, [status]: ""}))
  }

  const saveForm = async () => {
    try {
      const jsonValue = JSON.stringify(form)
      const kamu = await AsyncStorage.setItem('data_claim', jsonValue)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}}>
        <View
          style={{
            marginHorizontal: 6,
          }}
        >
          {dataClaims.map((item, index) => {
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
                  onChangeText={(a) => handleChange(a, item.name)}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  keyboardType={item.name === "money" ? "numeric" : null}
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
      <TouchableOpacity 
        onPress={saveForm}
        style={{flex:1, marginHorizontal:4}}
      >
        <View
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            backgroundColor:colors.primary_young,
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
              letterSpacing:1,
              color:colors.fourthy
            }}>Kirim Tagihan</Text>
          </View>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

function Bayaran() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}}>
        <View
          style={{
            marginHorizontal: 6,
          }}
        >
          {dataPays.map((item, index) => {
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
            backgroundColor:colors.primary_young,
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
              letterSpacing:1,
              color:colors.fourthy
            }}>Bayar</Text>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
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
