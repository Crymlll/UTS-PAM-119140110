import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable } from "react-native";
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

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
                        onPress={() => navigation.navigate('HomeScreen')}
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
    )
}

const infoStyle = StyleSheet.create({
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
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
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
        backgroundColor: '#ed7c31',
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
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#518fed',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalText: {
      textAlign: "center",
    }
  });

export default InfoScreen