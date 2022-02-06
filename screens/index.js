import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { IconButton, Button, ActivityIndicator } from 'react-native-paper';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useDimensions } from '@react-native-community/hooks';
import * as Permissions from 'expo-permissions';

const thumbnails = [{
    key: 'gamis_123',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/sommerce-develop.appspot.com/o/products%2F0XKnwTP1A3znJHS9bkzr%2Fthumbnail_1604508207651.jpg?alt=media&token=862d2769-c123-40e2-a5b5-140a17161d20'
}]

async function ensureDirExists(dir) {
    const dirInfo = await FileSystem.getInfoAsync(dir)
    if (!dirInfo.exists) {
        // console.log('directory doesn\'t exist, creating...');
        await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }
}

const getFileUri = (dir, productId, url) => {
    const ext = url.substring(url.lastIndexOf('.'));
    return dir + `${productId}${ext}`
};

export default function index() {
    const {window: dimension} = useDimensions()
    const [modalVisible, setModalVisible] = useState(false)
    const [acThumbnail, setacThumbnail] = useState(false)
    const [loading, setLoading] = useState(false)

    const permission = async () => {
        console.log('wadidaw');
        const permission = await MediaLibrary.getPermissionsAsync()
        console.log('permission', permission);
        if (!permission.granted) {
            const askPermission = await MediaLibrary.requestPermissionsAsync()
            console.log('askpermission', askPermission);
            if (!askPermission.granted) {
                console.log('tidak di izinkan');
                return false
            }
        }
        return true
    }

    const downloadDir = FileSystem.documentDirectory

    const downloadImage1 = async (productId, image) => {
        
        const productDir = downloadDir + '/' + productId
        await ensureDirExists(productDir);

        const fileUri = getFileUri(productDir, image.key, image.thumbnail);
        const fileInfo = await FileSystem.getInfoAsync(fileUri);

        await FileSystem.downloadAsync(image.thumbnail, fileUri);

        try {
            const asset = await MediaLibrary.createAssetAsync(fileUri);
            const album = await MediaLibrary.getAlbumAsync('Download');
            if (album == null) {
              await MediaLibrary.createAlbumAsync('Download', asset, false);
            } else {
              await MediaLibrary.addAssetsToAlbumAsync([asset], album, false)
              .then((data) => {
                console.log('succes created as', data);
              }).catch(e => {
                  console.log('ini error', e.message);
              })
            }
          } catch (e) {
            handleError(e);
          }
    }
    return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button loading={loading} onPress={() => permission()}>
            jahsja
        </Button>

        {thumbnails.map((item, index) => {

        return <TouchableOpacity activeOpacity={0.8} key={item.key} onPress={() => {
            setacThumbnail(index);
            setModalVisible(true);
        }}>
            <View
                style={[
                    //styles.carousel,
                ]}>

                <Image
                    resizeMode="contain"
                    style={{
                        width: dimension.width,
                        height: dimension.height * 0.5
                    }}
                    source={{ uri: item.thumbnail }}
                    loadingIndicatorSource={<ActivityIndicator />}
                    onError={(e) => {
                        console.log(e?.nativeEvent?.error)
                    }}

                />


            </View>
        </TouchableOpacity>

        })

        }
        <Modal
            animationType="fade"
            presentationStyle="overFullScreen"
            //statusBarTranslucent
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            hardwareAccelerated
            style={{ height: dimension.height }}
        >
            <ImageViewer
                //saveToLocalByLongPress={false}
                renderHeader={() => {
                    return <View style={[{ zIndex: 2000, alignItems: "flex-end", position: "absolute", right: 0 }, Platform.OS === 'ios' && { paddingTop: Constants.statusBarHeight }]}>
                        <IconButton icon="close" color="white" onPress={() => setModalVisible(false)} />
                    </View>
                }}
                useNativeDriver
                index={acThumbnail}
                imageUrls={thumbnails.map?.(item => ({ url: item.thumbnail })) ?? []}

                onSave={async (thumbnail) => {
                    // console.log(thumbnail);
                    await downloadImage1('gamis', { key: `gamis_${Date.now()}`, thumbnail })
                }}
            />
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
