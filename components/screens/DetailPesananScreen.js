import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, SafeAreaView, ScrollView  } from "react-native";
import { Pemesanan } from "../database/pemesanan";

import Ionicons from 'react-native-vector-icons/Ionicons';

import { detailPesananStyle, styles } from "../assets/Pesanan/DetailPemesananStyle";

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
            <View>
                <SafeAreaView>
                <ScrollView>
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
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={{ fontWeight: 'bold', color: '#000000'}}>Tidak</Text>
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
                        <Text style={{ color:'#000000' }}>{arrPemesanan[0].tanggal}</Text>
                        <Text style={{ color:'#000000' }}>{arrPemesanan[0].jam} WIB</Text>

                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Layanan</Text>
                        <Text style={{ color:'#000000' }}>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].kelas)}</Text>

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
                        <Text style={{ color:'#000000' }}>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].nama)}</Text>

                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop:20, }}>Identitas</Text>
                        <Text style={{ color:'#000000' }}>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].identitas)}</Text>

                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop:20, }}>Umur</Text>
                        <Text style={{ color:'#000000' }}>{capitalizeEveryFirstLetterEachWord(arrPemesanan[0].umur)}</Text>
                        
                        <TouchableOpacity 
                            style={detailPesananStyle.buttonOuter}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={detailPesananStyle.textButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                </SafeAreaView>
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


export default DetailPesananScreen