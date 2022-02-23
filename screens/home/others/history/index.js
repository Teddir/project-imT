import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { IconButton } from "react-native-paper";

const colors = {
  primary: "#1B202F",
  scondary: "#2AE05D",
  thirdty: "#EE4F4F",
  fourthy: "#FFFFFF",
  fivety: "#8B8B8B",
  sixty: "#C4C4C4",
};
const dimension = Dimensions.get("screen");

const dataUser = [
  {
    id: 1,
    title: "February",
    data: [
      {
        id: 1,
        nama: "Me",
        status: "Ketua Kelas",
        uang: 50000,
        status: true,
      },
      {
        id: 2,
        nama: "Elvina",
        status: "Wakil Kelas",
        uang: 40000,
        status: false,
      },
    ],
  },
  {
    id: 2,
    title: "Maret",
    data: [
      {
        id: 1,
        nama: "Me",
        status: "Ketua Kelas",
        uang: 50000,
        status: true,
      },
      {
        id: 2,
        nama: "Elvina",
        status: "Wakil Kelas",
        uang: 40000,
        status: true,
      },
      {
        id: 3,
        nama: "Elvira",
        status: "Sekretaris Kelas",
        uang: 20000,
      },
    ],
  },
];

function Body() {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <View style={{ marginBottom: 16 }}>
        <Image
          style={{
            width: dimension.width / 1.1,
            height: dimension.height / 5,
            borderRadius: 4,
          }}
          source={require("../../../../assets/icon.png")}
        />
      </View>

      {dataUser?.map((e) => {
        return (
          <View key={e.id}>
            <View style={{ marginBottom: 16 }}>
              <Text
                style={{
                  color: colors.fourthy,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {e.title}
              </Text>
            </View>
            {e.data.map((datas) => {
              return (
                <View
                  key={datas.id}
                  style={{
                    backgroundColor: "#2C3348",
                    borderRadius: 4,
                    marginBottom: 12,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: 16,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 50,
                        }}
                        source={require("../../../../assets/icon.png")}
                      />
                      <View style={{ marginHorizontal: 12 }}>
                        <Text style={{ color: colors.fourthy, fontSize: 16 }}>
                          Alat Kebersihan
                        </Text>
                        <Text style={{ color: colors.fivety, fontSize: 12 }}>
                          Seksi Kebersihan
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: datas.status
                            ? colors.scondary
                            : colors.thirdty,
                          fontSize: 18,
                        }}
                      >
                        {datas.status ? "+ " + datas.uang : "- " + datas.uang}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: 16,
                    }}
                  >
                    <View style={{ width: "40%", paddingRight: 5 }}>
                      <Text
                        style={{
                          color: colors.fivety,
                          fontSize: 12,
                          marginBottom: 4,
                        }}
                      >
                        Tanggal
                      </Text>
                      <Text
                        style={{ color: colors.fourthy, fontSize: 16 }}
                        numberOfLines={1}
                      >
                        02/02/2022
                      </Text>
                    </View>
                    <View style={{ width: "40%", paddingRight: 5 }}>
                      <Text
                        style={{
                          color: colors.fivety,
                          fontSize: 12,
                          marginBottom: 4,
                        }}
                      >
                        Keperluan
                      </Text>
                      <Text
                        style={{ color: colors.fourthy, fontSize: 16 }}
                        numberOfLines={1}
                      >
                        Beli Sapu Lidi
                      </Text>
                    </View>
                    <View style={{ width: "20%" }}>
                      <Text
                        style={{
                          color: colors.fivety,
                          fontSize: 12,
                          marginBottom: 4,
                        }}
                      >
                        Jumlah
                      </Text>
                      <Text
                        style={{ color: colors.fourthy, fontSize: 16 }}
                        numberOfLines={1}
                      >
                        01
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const listcomponent = [
  {
    id: "body",
    component: Body,
  },
];

export default function index() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [hy, setHy] = useState([])
  const [status, setStatus] = useState(false)
  useEffect(() => {
    // console.log(hy);
    if (hy.lama < 0) {
      setHy({
        ...hy,
        lama: 0
      })
    }

    if ((hy.baru > hy.lama)) {
      // console.log('bawah');
      setStatus(true)
    } else {
      // console.log('atas');
      setStatus(false)
    }
  }, [hy])
  
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary}
      />
      <Animated.FlatList
        onScroll={(e) => {
          const myY = e.nativeEvent.contentOffset.y
          setHy({
            lama: hy.baru,
            baru: myY
          })
        }}
        scrollEventThrottle={1}
        renderItem={({ item }) => {
          const ItemComponent = item.component;

          return (
            <View key={item.id} style={styles.flashsale}>
              <ItemComponent key={item.id} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        data={listcomponent}
        maxToRenderPerBatch={1} // Reduce number in each render batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={7} // Reduce the window size
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 80,
          paddingTop: StatusBar.currentHeight * 2,
        }}
      />

      <Animated.View
        style={{
          position: "absolute",
          backgroundColor: colors.primary,
          width: "100%",
        }}
      >
        <Animated.View
          style={{
            paddingTop: StatusBar.currentHeight,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton icon={"home"} color={colors.fourthy}/>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
