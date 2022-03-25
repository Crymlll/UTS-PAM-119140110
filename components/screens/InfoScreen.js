import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable, SafeAreaView, ScrollView } from "react-native";
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

    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }

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
                Alert.alert("Modal has been closed.");
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
                        onPress={() => navigation.navigate('Pesanan')}
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
                <Text>{data.tanggal}</Text>
                <Text>{data.jam} WIB</Text>

                <Text style={{ fontWeight: 'bold', color: 'black' }}>Layanan</Text>
                <Text>{capitalizeEveryFirstLetterEachWord(data.kelas)}</Text>

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
                    />
                </View>
            </View>

            <TouchableOpacity 
                style={infoStyle.buttonOuter}
                onPress={() => setModalVisible(true)}
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