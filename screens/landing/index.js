import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import { FadeInDown, FadeOut, Layout } from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");

const bgs = ["#698CF9", "#FD8BAD", "#F93D92"];
const DATA = [
  {
    key: "1",
    title: "Gratis materi belajar jualan",
    subtitle:
      "Ga bisa jualan? Jangan khawatir, dibimbing & dikasih tau langsung dari ahlinya.",
    end: false,
    image: require("../../assets/images/1.png"),
    status:true,
    slide: "first",
  },
  {
    key: "2",
    title: "Produk laris dengan kualitas terbaik ",
    subtitle:
      "Jualan lebih mudah, cukup share2 foto produk profesional yang sudah disediakan. ",
    end: false,
    image: require("../../assets/images/2.png"),
    status:true,
    slide: "second",
  },
  {
    key: "3",
    title: "Gratis toko online buat jualan kamu",
    subtitle: "Subdomain unik dan toko online profesional siap pakai. ",
    end: true,
    image: require("../../assets/images/3.png"),
    status:true,
    slide: "third",
  },
];

const Indicator = ({ scrollx }) => {
  return (
    <View style={{ flexDirection: "row", position: "absolute", top: height / 1.7, left:width / 26 }}>
      {DATA.map((_, i) => {
        const wid = scrollx.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const scale = scrollx.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.4, 1.9, 0.4],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: height / 190,
              width: wid,
              borderRadius: 5,
              backgroundColor: "#fff",
              marginLeft: width / 34,
              opacity,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ scrollx }) => {
  const backgroundColor = scrollx.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const Square = ({ scrollx }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollx, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: ['25deg', '0deg', '25deg']
  })
  const translateX = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: [0, -width, 0]
  })
  return (
    <Animated.View
      style={{
        width: width,
        height: height ,
        backgroundColor: "#ffffff12",
        borderRadius: 50,
        position: "absolute",
        bottom: -height * 0.5,
        left: -height * 0.5,
        transform: [
          {
            rotate : '25deg'
          },
          {
            translateX
          }
        ],
      }}
    />
  );
};

const Square1 = ({ scrollx }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollx, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: ['25deg', '0deg', '25deg']
  })
  const translateX = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: [0, -width, 0]
  })
  return (
    <Animated.View
      style={{
        width: width,
        height: height ,
        backgroundColor: "#fff",
        borderRadius: 300,
        position: "absolute",
        top: -height * 0.5,
        // left: -height * 0.5,
        // transform: [
        //   // {
        //   //   rotate
        //   // },
        //   {
        //     translateX
        //   }
        // ],
      }}
    />
  );
};


export default function Landing() {
  const scrollx = useRef(new Animated.Value(0)).current;
  const ref= useRef(null)
  const navigation = useNavigation()

  const handleNextPage = (index) => {
    let nextLanding = index + 1
    if (nextLanding === 3) {
      nextLanding = 0
      navigation.navigate("Home")
    } 
    // console.log(nextLanding);
    const offset = nextLanding * width
    ref.current.scrollToOffset({offset})
  }

  const handleLandingPage = (e) => {
    const contentOffset = e.nativeEvent.contentOffset.x
    const currentIndex =Math.round(contentOffset / width)
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" animated />
      <Backdrop scrollx={scrollx} />
      <Square scrollx={scrollx} />
      <Square1 scrollx={scrollx} />
      <Animated.FlatList
        data={DATA}
        horizontal
        automaticallyAdjustsScrollIndicatorInsets={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        ref={ref}
        keyExtractor={(item) => item.key}
        pagingEnabled
        onMomentumScrollEnd={handleLandingPage}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width, alignItems: "center", height,}}>
              <View style={{ flex: 0.6, justifyContent: "center" }}>
                <View style={{position:'absolute', top:-50}}>
                  <Image
                    source={require("../../assets/images/Logo.png")}
                    style={{
                      width: width / 1.5,
                      height: width / 2,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={item.status ? item.image : { uri: item.image }}
                    style={{
                      width: width / 1.5,
                      height: width / 1.5,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
              <View style={{ flex: 0.3, width: '90%' }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: width / 13,
                    marginVertical: height / 68,
                    color: "white",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: "#ffff", fontSize: width / 32 }}>{item.subtitle}</Text>
              </View>
              <Animated.View  onTouchEnd={() => handleNextPage(index)} style={{ flexDirection: "row", position: "absolute",bottom:100, marginHorizontal:12 }}>
                {/* <TouchableOpacity onPress={() => handleNextPage(index)}> */}
                  <View style={{width: width / 1.1, height:height / 14, borderRadius:50, borderColor:"white", borderWidth:1, backgroundColor:'tranparent'}}>
                    <View style={{margin:14, justifyContent:'center', alignItems:"center", flex:1}}>
                      <Text style={{fontSize:width / 30, textAlign:'center', textTransform:'uppercase', letterSpacing:2, fontWeight:'bold', color:'white'}}>{index === 2 ? "Masuk Ke Tokorame" : "Berikutnya"}</Text>
                    </View>
                  </View>
                {/* </TouchableOpacity> */}
              </Animated.View>
            </View>
          );
        }}
      />
      <Indicator scrollx={scrollx} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
