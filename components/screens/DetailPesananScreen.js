import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from "react-native";
import { Pemesanan } from "../database/pemesanan";

import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailPesananScreen = ({route, navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const { data } = route.params;

    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }


    let detailPesanan = () => {

        let arrPemesanan = Pemesanan.filter ( (x) => {

            return(
                x.idPemesanan === data
            )
        })
        // console.log(arrPemesanan)

        if(arrPemesanan.length > 0){
            return (
                <View style={detailPesananStyle.box}> 

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>PEMBATALAN TIKET</Text>
                        <Text style={styles.modalText}>Apakah kamu yakin ingin membatalkan tiket?</Text>
                        <View style={{ marginTop:20, flex:0, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => navigation.goBack()}
                            >
                            <Text style={{ fontWeight: 'bold', }}>Tidak</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => navigation.navigate('Pembatalan')}
                            >
                            <Text style={styles.textStyle}>Yakin</Text>
                            </Pressable>
                        </View>
                        
                    </View>
                    </View>

                </Modal>
                    <Text style={detailPesananStyle.rincian}>Detail Tiket Pemesanan</Text>
                    <View style={detailPesananStyle.boxGray}>
                        <View style={detailPesananStyle.asalTujuan}>
                            <Text style={detailPesananStyle.keberangkatan}>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].keberangkatan)}</Text>
                            <Ionicons style={detailPesananStyle.Icon} name="ios-arrow-forward" size={30} color="black"/>
                            <Text style={detailPesananStyle.tujuan}>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].tujuan)}</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Jadwal Masuk Pelabuhan</Text>
                        <Text>{arrPemesanan[0].tanggal}</Text>
                        <Text>{arrPemesanan[0].jam} WIB</Text>

                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Layanan</Text>
                        <Text>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].kelas)}</Text>

                        <View
                            style={{
                                borderBottomWidth: 1,
                                marginTop: 10
                            }}
                        />

                        <View style={detailPesananStyle.hargaBox}>
                            <Text style={detailPesananStyle.textDewasa}>Dewasa x 1</Text>
                            <Text style={detailPesananStyle.harga}>Rp. {arrPemesanan[0].harga}</Text>
                        </View>
                        
                        <View
                            style={{
                                borderBottomWidth: 1,
                            }}
                        />
                        
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop:20, }}>Nama Lengkap</Text>
                        <Text>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].nama)}</Text>

                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop:20, }}>Identitas</Text>
                        <Text>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].identitas)}</Text>

                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop:20, }}>Umur</Text>
                        <Text>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].umur)}</Text>
                        
                        <TouchableOpacity 
                            style={detailPesananStyle.buttonOuter}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={detailPesananStyle.textButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

    }
    
    return (
        <View>
            {detailPesanan()}
        </View>
    )
}

const detailPesananStyle = StyleSheet.create({
    package:{
        marginTop: 10,
    },
    formSingle:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        marginTop: 5,
    },
    text:{
        fontSize: 12,
        fontWeight: 'bold'
    },
    iconInput:{
        padding: 10,
    },
    input:{
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
    },
    box:{
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 30,
        width: '90%',
        top: '5%',
        shadowColor: '#000',
        elevation: 5,
    },
    boxGray:{
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 0,
        marginBottom: 20,
    },
    kuota:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
    },
    rincian:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
    },
    asalTujuan:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    keberangkatan:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    tujuan:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    Icon:{
        fontSize: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#518fed',
        textAlign: 'center',
    },
    titleSub:{
        fontSize: 8,
        fontWeight: 'bold',
        color: '#c7c7c7',
        textAlign: 'center',
        marginBottom: 20,
    },
    hargaBox:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    textDewasa:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    harga:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonOuter:{
        backgroundColor: '#f04313',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: '5%',
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%'
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    outerBox:{
        marginBottom: 20,
    },
})

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      paddingLeft: '20%',
      paddingRight: '20%',
    },
    buttonOpen: {
      backgroundColor: "#de2626",
    },
    buttonClose: {
      backgroundColor: "#de2626",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#de2626',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalText: {
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 15,
    }
});

export default DetailPesananScreen