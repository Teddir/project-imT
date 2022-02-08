import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View, Text, StatusBar, Image, Dimensions, TouchableOpacity } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const colors = {
  primary: "#1B202F",
  scondary: "#2AE05D",
  thirdty: "#EE4F4F",
  fourthy: "#FFFFFF",
  fivety: "#8B8B8B",
  sixty: "#C4C4C4"
};

const dataCharts = {
  labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"],
  datasets: [
    {
      data: [
        900,
        700,
        800,
        1000,
        600,
        500,
        400,
      ],
    }
  ]
}

const dataUser = [
  {
    id:1,
    nama: 'Me',
    status: 'Ketua Kelas',
    uang: 50000
  },
  {
    id:2,
    nama: 'Elvina',
    status: 'Wakil Kelas',
    uang: 40000
  },
  {
    id:3,
    nama: 'Elvira',
    status: 'Sekretaris Kelas',
    uang: 20000
  },
  {
    id:4,
    nama: 'Bagas',
    status: 'Bendahara Kelas',
    uang: 30000
  },
  {
    id:5,
    nama: 'Rendy',
    status: 'Keamanan Kelas',
    uang: 45000
  }
]

export default function Index() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      {/* header */}
      <View
        style={{
          marginTop: StatusBar.currentHeight * 2,
          marginHorizontal: 24,
          flexDirection: "row",
          justifyContent:"space-between",
        }}
      >
        <View>
          <Text style={{ color: colors.fivety, fontSize: 24 }}>Hello</Text>
          <Text
            style={{ color: colors.fourthy, fontSize: 24, fontWeight: "bold" }}
          >
            Mr. Teddir
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: 80,
              height: 80,
              backgroundColor: colors.fivety,
              borderRadius:50
            }}
            source={require("../../assets/icon.png")}
          />
        </View>
      </View>

      {/* charts */}
      <TouchableOpacity onPress={() => navigation.navigate("History")}>
        <View style={{justifyContent:"center", alignItems:'center', marginTop:34}}>
        <LineChart  
          data={dataCharts}
          width={Dimensions.get("screen").width / 1.1} // from react-native
          height={250}
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: "#3142D2",
            backgroundGradientFrom: "#2C3348",
            backgroundGradientTo: "#2C3348",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(42, 61, 224, ${opacity})`,
            labelColor: (opacity = 1.1) => `rgba(164, 162, 162, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "4",
              stroke: "#C4C4C4",
            }
          }}
          bezier
          onDataPointClick={(a) => console.log(a)}
          style={{
            borderRadius: 4,
          }}
        />
        </View>
      </TouchableOpacity>

      {/* menu */}
      <View style={{
        marginHorizontal: 24,
        marginVertical:20,
        flexDirection:"row",
        justifyContent:"space-between",
        height:"14%"
      }}>
          <View style={{
            width:"48%",
            backgroundColor:"#2C3348",
            borderRadius:4,
          }}>
            <Image
            style={{
              width:"60%",
              height:"50%",
              position:'absolute',
              right:1,
              bottom:0,
              borderBottomRightRadius:4
            }}
            source={require("../../assets/vector.png")}
            />
            <View style={{margin:18}}>
              <Text style={{color: colors.fourthy, fontWeight:'bold', fontSize:20, textTransform:'uppercase', letterSpacing:1.1}}>Tagihan</Text>
              <Text style={{color: colors.sixty, fontSize:12}}>Klik untuk menagih</Text>
            </View>
          </View>
          <View style={{
            width:"48%",
            backgroundColor:"#2C3348",
            borderRadius:4,
          }}>
            <Image
            style={{
              width:"60%",
              height:"50%",
              position:'absolute',
              right:1,
              bottom:0,
              borderBottomRightRadius:4
            }}
            source={require("../../assets/vector.png")}
            />
            <View style={{margin:18}}>
              <Text style={{color: colors.fourthy, fontWeight:'bold', fontSize:20, textTransform:'uppercase', letterSpacing:1.1}}>Bayaran</Text>
              <Text style={{color: colors.sixty, fontSize:12}}>Klik untuk membayar</Text>
            </View>
          </View>
      </View>

      {/* list user */}
      <View style={{
        marginHorizontal:24,
      }}>

        {/* head */}
        <View style={{
          justifyContent:"space-between",
          flexDirection:"row",
          alignContent:"center",
          marginBottom:16
        }}>
          <Text style={{color:colors.fourthy, fontSize:18, fontWeight:'bold'}}>Status</Text>
          <View style={{justifyContent:'center', flexDirection:"row", alignItems:"center"}}>
            <Text style={{color:colors.fourthy, fontSize:14}}>Filter:</Text>
            <View style={{
              backgroundColor: '#1d3dbf59',
              marginLeft:12,
              borderRadius:5,
              justifyContent:"center",
              height:30,
            }}>
              <View style={{
                marginHorizontal:12,
              }}>
                <Text style={{textAlign:"center", fontSize:12, color:colors.fourthy}}>Sudah Bayar</Text>
              </View>
            </View>
          </View>
        </View>

        {/* body */}
        {dataUser.map((e) => {
          return (
            <View key={e.id} style={{
              marginVertical:8,
              backgroundColor:"#2C3348",
              borderRadius:4
            }}>
              <View style={{
                margin:16,
                justifyContent:"space-between",
                flexDirection:"row",
                alignItems:'center'
              }}>
                <View style={{justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
                  <Image
                    style={{
                      width:60,
                      height:60,
                      borderRadius:50,
                      backgroundColor:'grey'
                    }}
                    source={require("../../assets/icon.png")}
                  />
                  <View style={{marginHorizontal:12}}>
                    <Text style={{color:colors.fourthy, fontSize:18}}>{e.nama}</Text>
                    <Text style={{color:colors.fivety, fontSize:12}}>{e.status}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{color:colors.fourthy, fontSize:18}}>+ {e.uang}</Text>
                </View>
              </View>
            </View>
          )
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});
