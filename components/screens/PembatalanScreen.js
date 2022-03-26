import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// import { Pemesanan } from '../database/pemesanan';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import pembatalanStyle from '../assets/Pembatalan/PembatalanStyle';

const PembatalanScreen = ({navigation}) => {
    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }

    const [Pemesanan, setGetPemesanan] = useState([]);
    
    const fetchData = async () => {
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

    let findAllJadwal = () => {

        
        let listPembatalan = Pemesanan.filter( (x) => {
            return x.status == 'canceled'
        })

        if(listPembatalan.length > 0){
            return listPembatalan.map( (printJadwal, i) => {
                return (
                    <View key={i}>
                        <TouchableOpacity>
                            <View style={pembatalanStyle.boxGray}>
                                <View style={pembatalanStyle.asalTujuan}>
                                    <Text style={pembatalanStyle.keberangkatan}>{capitalizeEveryFirstLetterEachWord(printJadwal.keberangkatan)}</Text>
                                    <Ionicons style={pembatalanStyle.Icon} name="ios-arrow-forward" size={10} color="black"/>
                                    <Text style={pembatalanStyle.tujuan}>{capitalizeEveryFirstLetterEachWord(printJadwal.tujuan)}</Text>
                                </View>
                                <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Jadwal Masuk Pelabuhan</Text>
                                <Text style={{ color:'#000000' }}>{printJadwal.tanggal}</Text>
                                <Text style={{ color:'#000000' }}>{printJadwal.jam} WIB</Text>
                
                                <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Layanan</Text>
                                <Text style={{ color:'#000000' }}>{capitalizeEveryFirstLetterEachWord(printJadwal.kelas)}</Text>
                
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        marginTop: 10
                                    }}
                                />
                
                                <View style={pembatalanStyle.hargaBox}>
                                    <Text style={pembatalanStyle.textDewasa}>Dewasa x 1</Text>
                                    <Text style={pembatalanStyle.harga}>Rp. {printJadwal.harga}</Text>
                                </View>

                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        marginTop: 10
                                    }}
                                />

                            <Text style={{ fontWeight: 'bold', color: 'black', marginTop:10, }}>Status</Text>
                            <Text style={{ color: 'red'}}>{capitalizeEveryFirstLetterEachWord(printJadwal.status)}</Text>


                            </View>
                        </TouchableOpacity>
                    </View>
                )
            
            
            
            })
        }else{
            return(
                <View>
                    <SafeAreaView>
                    <ScrollView>
                    <View style={pembatalanStyle.box}>
                        <Text style={pembatalanStyle.title}>Kapalzy</Text>
                        <Text style={pembatalanStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>
                        
                        <View style={pembatalanStyle.maaf}>
                            <Text style={pembatalanStyle.maafText}>Anda belum pernah membuat pembatalan</Text>
                            <Fontisto style={pembatalanStyle.Icon} name="ship" size={30} color="#518fed"/>
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
            <SafeAreaView>
            <ScrollView>
            {findAllJadwal()}
            </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default PembatalanScreen