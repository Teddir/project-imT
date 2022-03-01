import {
  Animated,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { IconButton, Searchbar, useTheme } from "react-native-paper";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import { useScrollToTop } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const colors = {
  primary: "#1B202F",
  primary_young: "#282F45",
  scondary: "#2AE05D",
  thirdty: "#EE4F4F",
  fourthy: "#FFFFFF",
  fivety: "#8B8B8B",
  sixty: "#C4C4C4",
};

export default function index() {
  const [claim, setClaim] = React.useState({})
  let datas = [];
  for (let index = 0; index < 100; index++) {
    datas.push(index);
  }

  const { onScroll, containerPaddingTop, scrollIndicatorInsetTop, translateY } = useCollapsibleHeader();
  const ref = useRef(null);
  useScrollToTop(ref);

  
  React.useEffect(async() => {
    try {
      const dia = await AsyncStorage.getItem('data_claim')
      if (dia == null) {
        setClaim(dia)
      }
    } catch (error) {
      console.log(error.message);
    }
  },[])
  console.log(claim);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Animated.FlatList
        data={datas}
        keyExtractor={(a) => `${a}+${a.length}`}
        renderItem={(item, index) => {
          return (
            <View
              key={index}
              style={{
                margin: 16,
              }}
            >
              <Text>{`${item.index} semangat Teddi`}</Text>
            </View>
          );
        }}
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight * 3,
        }}
        // scrollIndicatorInsets={{
        //   top: scrollIndicatorInsetTop + stickyHeaderHeight,
        // }}
        ref={ref}
      />

      <Animated.View
        style={{
          position: "absolute",
          backgroundColor: colors.primary_young,
          width: "100%",
          transform: [{ translateY: translateY }],
        }}
      >
        <Animated.View
          style={{
            paddingTop: StatusBar.currentHeight + 6,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 12,
          }}
        >
          <View
            style={{
              marginVertical: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
            >
            <View
              style={{
                justifyContent: "center",
                width: "10%",
              }}
            >
              <View
                style={{
                  height: 38,
                  width: 38,
                  borderRadius: 100,
                  backgroundColor: "pink",
                }}
              >
                <Image
                  source={require("../../../../assets/icon.png")}
                  style={{
                    height: 38,
                    width: 38,
                    borderRadius: 100,
                  }}
                  blurRadius={20}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                width: "80%",
                marginLeft:6
              }}
            >
              <Searchbar
                placeholder="Search"
                inputStyle={{
                  fontSize: 14,
                }}
                style={{
                  height: "70%",
                }}
                icon={() => (
                  <MaterialCommunityIcons
                    name="magnify"
                    size={18}
                    color={"grey"}
                  />
                )}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                width: "10%",
                // backgroundColor:'pink'
                marginLeft:4
              }}
            >
              <IconButton icon={"cart-outline"} color={colors.fourthy} />
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    textAlign: "center",
    marginVertical: 4,
  },
});
