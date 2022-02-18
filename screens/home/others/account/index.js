import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const colors = {
  primary: "#1B202F",
  scondary: "#2AE05D",
  thirdty: "#EE4F4F",
  fourthy: "#FFFFFF",
  fivety: "#8B8B8B",
  sixty: "#C4C4C4",
};

const datas = [
  {
    id:1,
    title:'username',
    desc: 'lihat & ganti username sesuai keinginanmu',
    right_icon:'account-outline',
  },
  {
    id:2,
    title:'phone',
    desc: 'masukkan nomor hp/telepon kamu sesuai syarat yang telah ditentukan',
    right_icon:'phone-outline',
  },
  {
    id:3,
    title:'daftar anggota',
    desc: 'Cek & tambah anggota kamu dengan mudah',
    right_icon:'account-group-outline',
  },
  {
    id:4,
    title:'butuh bantuan',
    desc: 'langsung aja chat kami. jika masih bingung',
    right_icon:'forum-outline',
  }
]

export default function index() {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 16,
          marginBottom: 50,
          // backgroundColor:"#2C3348",
          alignItems: "center",
        }}
      >
        <View style={{ marginVertical: 16 }}>
          <Image
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
            }}
            source={require("../../../../assets/icon.png")}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              color: colors.fourthy,
              fontSize: 24,
              textTransform: "capitalize",
            }}
          >
            Teddi aja
          </Text>
          <Text
            style={{
              color: colors.fivety,
              fontSize: 14,
              textTransform: "lowercase",
            }}
          >
            Ketua Kelas
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#2C3348",
          marginHorizontal: 24,
          borderRadius:4
        }}
      >

        {datas.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                marginHorizontal: 12,
                marginTop: data.id === 1 ? 20 : 12,
                marginBottom: data.id === datas.length ? 12 : 0,
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: data.id === datas.length ? 0 : 1,
                paddingBottom:20,
                borderBottomColor: 'grey'
              }}
            >
              <View style={{
                flexDirection:"row",
              }}>
                <View
                  style={{
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    width:50,
                    alignItems:"center"
                  }}
                >
                  <MaterialCommunityIcons name={data.right_icon} size={26} color={colors.fivety}/>
                </View>
                <View style={{
                  width:'80%'
                }}>
                  <Text
                    style={{
                      color: colors.fourthy,
                      textTransform: "capitalize",
                      fontSize: 16,
                    }}
                  >
                    {data.title}
                  </Text>
                  <Text
                    style={{
                      color: colors.fivety,
                      textTransform: "lowercase",
                      fontSize: 12,
                    }}
                  >
                    {data.desc}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  // backgroundColor: "pink",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons name="chevron-right" size={26} color={colors.fivety}/>
              </View>
            </View>
          )
        })}
        
      </View>
      <View style={{
        marginLeft:35,
        marginTop:20
      }}>
        <Text style={{fontSize:16, color:colors.fourthy, marginBottom:14}}>Tentang Kami</Text>
        <Text style={{fontSize:16, color:colors.fourthy, marginBottom:14}}>Beri Masukkan</Text>
        <Text style={{fontSize:16, color:colors.thirdty, marginBottom:14}}>Keluar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight * 2,
    backgroundColor: colors.primary,
  },
});
