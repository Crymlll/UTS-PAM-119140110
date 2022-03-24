import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Jadwal } from '../database/data';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailScreen = ({route, navigation}) => {
    const { data } = route.params;

    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }

    let getJadwal = () => {
        let arrJadwal = Jadwal.filter ( (x) => {

            return(
                x.pelabuhanAwal.toLowerCase() == data.keberangkatan.toLowerCase() &&
                x.pelabuhanTujuan.toLowerCase() == data.tujuan.toLowerCase() &&
                x.kelas.toLowerCase() == data.kelas.toLowerCase()
            )
        })
    }

    return (
        <View style={detailStyle.box}>
            <Text style={detailStyle.title}>Kapalzy</Text>
            <Text style={detailStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>

            <Text style={detailStyle.kuota}>kuota Tersedia (152)</Text>
            <Text style={detailStyle.rincian}>Rincian Tiket</Text>
            <View style={detailStyle.boxGray}>
                <View style={detailStyle.asalTujuan}>
                    <Text style={detailStyle.keberangkatan}>{capitalizeEveryFirstLetterEachWord(data.keberangkatan)}</Text>
                    <Ionicons style={detailStyle.Icon} name="ios-arrow-forward" size={30} color="black"/>
                    <Text style={detailStyle.tujuan}>{capitalizeEveryFirstLetterEachWord(data.tujuan)}</Text>
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

                <View style={detailStyle.hargaBox}>
                    <Text style={detailStyle.textDewasa}>Dewasa</Text>
                    <Text style={detailStyle.harga}>100000</Text>
                </View>
            </View>
            <View style={detailStyle.outerBox}>
                <View style={detailStyle.total}>
                    <Text style={detailStyle.textTotal}>Total</Text>
                    <Text style={detailStyle.textTotal}>Rp. 100000</Text>
                </View>
            </View>
            <View style={detailStyle.button}>
                <TouchableOpacity style={detailStyle.kembali} onPress={() => navigation.goBack()}>
                    <Text style={detailStyle.textButtonK}>kembali</Text>
                </TouchableOpacity>
                <TouchableOpacity style={detailStyle.lanjutkan}>
                    <Text style={detailStyle.textButtonL}>Lanjutkan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const detailStyle = StyleSheet.create({
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
    kembali:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#969696',
        marginLeft: '5%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    lanjutkan:{
        backgroundColor: '#518fed',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: '5%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    textButtonL:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    textButtonK:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#518fed',
        textAlign: 'center',
    },
    total:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    textTotal:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    outerBox:{
        marginBottom: 20,
    },

})

export default DetailScreen