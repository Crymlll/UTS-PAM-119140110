import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Jadwal } from '../database/data';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import detailStyle from "../assets/Home/DetailScreenStyle";

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

        if(arrJadwal.length > 0){
            var newData = {
                kuota: arrJadwal[0].kuota,
                keberangkatan: capitalizeEveryFirstLetterEachWord(arrJadwal[0].pelabuhanAwal),
                tujuan: capitalizeEveryFirstLetterEachWord(arrJadwal[0].pelabuhanTujuan),
                kelas: capitalizeEveryFirstLetterEachWord(arrJadwal[0].kelas),
                tanggal: data.tanggal,
                jam: data.jam,
                harga: arrJadwal[0].harga,
            }
            // console.log(newData)
            return (
            <View>
                <SafeAreaView>
                <ScrollView>
                <View style={detailStyle.box}>
                    <Text style={detailStyle.title}>Kapalzy</Text>
                    <Text style={detailStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>
        
                    <Text style={detailStyle.kuota}>kuota Tersedia ({arrJadwal[0].kuota})</Text>
                    <Text style={detailStyle.rincian}>Rincian Tiket</Text>
                    <View style={detailStyle.boxGray}>
                        <View style={detailStyle.asalTujuan}>
                            <Text style={detailStyle.keberangkatan}>{capitalizeEveryFirstLetterEachWord(arrJadwal[0].pelabuhanAwal)}</Text>
                            <Ionicons style={detailStyle.Icon} name="ios-arrow-forward" size={30} color="black"/>
                            <Text style={detailStyle.tujuan}>{capitalizeEveryFirstLetterEachWord(arrJadwal[0].pelabuhanTujuan)}</Text>
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
                            <Text style={detailStyle.textDewasa}>Dewasa x 1</Text>
                            <Text style={detailStyle.harga}>Rp. {arrJadwal[0].harga}</Text>
                        </View>
                    </View>
                    <View style={detailStyle.outerBox}>
                        <View style={detailStyle.total}>
                            <Text style={detailStyle.textTotal}>Total</Text>
                            <Text style={detailStyle.textTotal}>Rp. {arrJadwal[0].harga}</Text>
                        </View>
                    </View>
                    <View style={detailStyle.button}>
                        <TouchableOpacity style={detailStyle.kembali} onPress={() => navigation.goBack()}>
                            <Text style={detailStyle.textButtonK}>kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={detailStyle.lanjutkan} onPress={() => navigation.navigate('InfoScreen', {data: newData})}>
                            <Text style={detailStyle.textButtonL}>Lanjutkan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                </SafeAreaView>
            </View>
            )
        }else{
            return(
            <View>
                <SafeAreaView>
                <ScrollView>
                <View style={detailStyle.box}>
                    <Text style={detailStyle.title}>Kapalzy</Text>
                    <Text style={detailStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>
                    
                    <View style={detailStyle.maaf}>
                        <Text style={detailStyle.maafText}>Maaf, Jadwal Kapal Tidak Ditemukan</Text>
                        <Fontisto style={detailStyle.Icon} name="ship" size={30} color="#518fed"/>
                    </View>
                    
                    <View style={detailStyle.buttonNo}>
                        <TouchableOpacity style={detailStyle.kembaliNo} onPress={() => navigation.goBack()}>
                            <Text style={detailStyle.textButtonK}>kembali</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                </SafeAreaView>
            </View>
            )
        }
    }

    return(
        <View>
            {getJadwal()}
        </View>
    )
}



export default DetailScreen