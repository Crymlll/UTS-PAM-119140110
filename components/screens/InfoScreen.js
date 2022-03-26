import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {infoStyle , styles} from "../assets/Home/InfoStyle";

const InfoScreen = ({route, navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const { data } = route.params;

    const [dataPemesan, setDataPesanan] = useState({
        nama: 'aulia rz',
        identitas : 'laki-laki',
        umur : '21',
    })
    const [idData, setIdData] = useState({
        uId: '',
        status: 'scheduled',
    });

    const allData = {...data, ...dataPemesan, ...idData};


    const clickHandler = (textInput) => {
        return (value) => {
            setDataPesanan({ ...dataPemesan, [textInput]: value });
        }
    }

    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }

    function createId() {
        return Math.floor(Date.now() * Math.random());
    }

    const [Pemesanan, setGetPemesanan] = useState([]);

    let saveData = async (data) => {
        try {
            if(Pemesanan.length > 0){
                let temp = Pemesanan
                console.log("temp > 0 : ", temp)

                temp.push(data)

                await AsyncStorage.setItem('data', JSON.stringify(temp))
            }else{
                let arr = []
    
                let temp = Pemesanan
                console.log("temp : ", temp)

                arr.push(temp)
                arr.push(data)

                await AsyncStorage.setItem('data', JSON.stringify(arr))
            }
            
        } catch (e) {
            console.log(e);
        }
        console.log("Success Created DATA : ", data);
    }

    const fetchData = async ()  => {
        try {
            const data = await AsyncStorage.getItem('data');
            if (data !== null) {
                // console.log("JSON : ",JSON.parse(data))
                setGetPemesanan(JSON.parse(data));
            }
        } catch (e) {
            console.log(e)
        }
    };    

    useEffect(() => {
        fetchData();
    }, [])

    return (
    <View>
        <SafeAreaView>
        <ScrollView>
        <View style={infoStyle.box}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>PEMBAYARAN</Text>
                    <Text style={styles.modalText}>TRANSFER KE NOMOR REKENING</Text>
                    <Text style={styles.modalText}>119140110 (Aulia Rahman Zulfi)</Text>
                    <Text style={styles.modalText}>Bank ITERA</Text>
                    <View style={{ marginTop:20, }}>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            // console.log("MODAL DATA : ",allData)
                            saveData(allData)
                            navigation.navigate('Pesanan')
                        }}
                        >
                        <Text style={styles.textStyle}>Selesai</Text>
                        </Pressable>
                    </View>
                    
                </View>
                </View>

            </Modal>

            
            <Text style={infoStyle.title}>Kapalzy</Text>
            <Text style={infoStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>

            <Text style={infoStyle.rincian}>Informasi Pemesanan</Text>
            <View style={infoStyle.boxGray}>
                <View style={infoStyle.asalTujuan}>
                    <Text style={infoStyle.keberangkatan}>{capitalizeEveryFirstLetterEachWord(data.keberangkatan)}</Text>
                    <Ionicons style={infoStyle.Icon} name="ios-arrow-forward" size={30} color="black"/>
                    <Text style={infoStyle.tujuan}>{capitalizeEveryFirstLetterEachWord(data.tujuan)}</Text>
                </View>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>Jadwal Masuk Pelabuhan</Text>
                <Text style={{ color:'#000000' }}>{data.tanggal}</Text>
                <Text style={{ color:'#000000' }}>{data.jam} WIB</Text>

                <Text style={{ fontWeight: 'bold', color: 'black' }}>Layanan</Text>
                <Text style={{ color:'#000000' }}>{capitalizeEveryFirstLetterEachWord(data.kelas)}</Text>

                <View
                    style={{
                        borderBottomWidth: 1,
                    }}
                />

                <View style={infoStyle.hargaBox}>
                    <Text style={infoStyle.textDewasa}>Dewasa x 1</Text>
                    <Text style={infoStyle.harga}>Rp. {data.harga}</Text>
                </View>
            </View>

            <Text style={infoStyle.rincian}>Data Pemesan</Text>

            <View style={infoStyle.package}>
                <Text style={infoStyle.text}>Nama Lengkap</Text>
                <View style={infoStyle.formSingle}>
                    <Ionicons style={infoStyle.iconInput} name="person" size={30} color="#518fed"/>
                    <TextInput
                        style={infoStyle.input}
                        placeholder="Aulia Rahman Zulfi"
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#c4c4c4'}
                        onChangeText={clickHandler('nama')}
                    />
                </View>
            </View>

            <View style={infoStyle.package}>
                <Text style={infoStyle.text}>Identitas</Text>
                <View style={infoStyle.formSingle}>
                    <FontAwesome5 style={infoStyle.iconInput} name="id-card" size={30} color="#518fed"/>
                    <TextInput
                        style={infoStyle.input}
                        placeholder="Laki - Laki"
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#c4c4c4'}
                        onChangeText={clickHandler('identitas')}
                    />
                </View>
            </View>

            <View style={infoStyle.package}>
                <Text style={infoStyle.text}>Umur</Text>
                <View style={infoStyle.formSingle}>
                    <Fontisto style={infoStyle.iconInput} name="magento" size={30} color="#518fed"/>
                    <TextInput
                        style={infoStyle.input}
                        placeholder="21 Tahun"
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#c4c4c4'}
                        onChangeText={clickHandler('umur')}
                    />
                </View>
            </View>

            <TouchableOpacity 
                style={infoStyle.buttonOuter}
                onPress={() => {
                    setIdData({...idData, uId: createId()})
                    // console.log(allData)
                    setModalVisible(true)
                }}
            >
                <Text style={infoStyle.textButton}>Submit</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    </View>
    )
}


export default InfoScreen