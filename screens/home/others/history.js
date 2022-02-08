import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const colors = {
  primary: "#1B202F",
  scondary: "#2AE05D",
  thirdty: "#EE4F4F",
  fourthy: "#FFFFFF",
  fivety: "#8B8B8B",
  sixty: "#C4C4C4",
};
const dimension = Dimensions.get("screen")

const dataUser = [
  {
    id:1,
    title: 'February',
    data: [
      {
        id:1,
        nama: 'Me',
        status: 'Ketua Kelas',
        uang: 50000,
        status: true
      },
      {
        id:2,
        nama: 'Elvina',
        status: 'Wakil Kelas',
        uang: 40000,
        status: false
      },
    ]
  },
  {
    id:2,
    title: 'Maret',
    data: [
      {
        id:1,
        nama: 'Me',
        status: 'Ketua Kelas',
        uang: 50000,
        status: true
      },
      {
        id:2,
        nama: 'Elvina',
        status: 'Wakil Kelas',
        uang: 40000,
        status: true
      },
      {
        id:3,
        nama: 'Elvira',
        status: 'Sekretaris Kelas',
        uang: 20000
      },
    ]
  },
]

export default function history() {
  return (
    <View style={styles.container}>
      <View style={{
        marginTop:StatusBar.currentHeight * 4,
        justifyContent:"center",
        alignItems:"center",
      }}>
        <View style={{marginHorizontal:24}}>

          <View style={{marginBottom:16}}>
            <Image
              style={{
                width:dimension.width / 1.1,
                height:dimension.height / 5,
                borderRadius:4
              }}
              source={require("../../../assets/icon.png")}
            />
          </View>
          
          {dataUser?.map((e) => {
            return (
              <View key={e.id}>
                <View style={{marginBottom:16}}>
                  <Text style={{color:colors.fourthy, fontSize:18, fontWeight:'bold'}}>{e.title}</Text>
                </View>
                {e.data.map((datas) => {
                  return (
                    <View key={datas.id} style={{backgroundColor:'#2C3348', borderRadius:4, marginBottom:12}}>
                      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", margin:16}}>
                          <View style={{flexDirection:'row'}}>
                            <Image
                              style={{
                                width:50,
                                height:50,
                                borderRadius:50
                              }}
                              source={require("../../../assets/icon.png")}
                            />
                            <View style={{marginHorizontal:12}}>
                              <Text style={{color:colors.fourthy, fontSize:16}}>Alat Kebersihan</Text>
                              <Text style={{color:colors.fivety, fontSize:12}}>Seksi Kebersihan</Text>
                            </View>
                          </View>
                          <View>
                            <Text style={{color:datas.status ? colors.scondary : colors.thirdty, fontSize:18}}>{datas.status ? "+ " + datas.uang : "- " + datas.uang}</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", margin:16}}>
                        <View style={{width:'40%',paddingRight:5}}>
                          <Text style={{color:colors.fivety, fontSize:12, marginBottom:4}}>Tanggal</Text>
                          <Text style={{color:colors.fourthy, fontSize:16}} numberOfLines={1}>02/02/2022</Text>
                        </View>
                        <View style={{width:'40%', paddingRight:5}}>
                          <Text style={{color:colors.fivety, fontSize:12, marginBottom:4}}>Keperluan</Text>
                          <Text style={{color:colors.fourthy, fontSize:16}} numberOfLines={1}>Beli Sapu Lidi</Text>
                        </View>
                        <View style={{width:'20%'}}>
                          <Text style={{color:colors.fivety, fontSize:12, marginBottom:4}}>Jumlah</Text>
                          <Text style={{color:colors.fourthy, fontSize:16}} numberOfLines={1}>01</Text>
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
            )
          })}

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
