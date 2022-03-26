import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// import { Pemesanan } from '../database/pemesanan';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import pesananStyle from '../assets/Pesanan/PesananStyle';

const PesananScreen = ({navigation}) => {

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

        let listPemesanan = Pemesanan.filter( (x) => {
            return x.status == 'scheduled'
        })

        if(listPemesanan.length > 0){

            return listPemesanan.map( (printJadwal, i) => {
                // console.log(Pemesanan)
                // console.log(i)
                
                return (
                    <View key={i}>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailPesananScreen', {data: printJadwal.uId})}>
                            <View style={pesananStyle.boxGray}>
                                <View style={pesananStyle.asalTujuan}>
                                    <Text style={pesananStyle.keberangkatan}>{capitalizeEveryFirstLetterEachWord(printJadwal.keberangkatan)}</Text>
                                    <Ionicons style={pesananStyle.Icon} name="ios-arrow-forward" size={10} color="black"/>
                                    <Text style={pesananStyle.tujuan}>{capitalizeEveryFirstLetterEachWord(printJadwal.tujuan)}</Text>
                                </View>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>Jadwal Masuk Pelabuhan</Text>
                                <Text style={{ color:'#000000' }}>{printJadwal.tanggal}</Text>
                                <Text style={{ color:'#000000' }}>{printJadwal.jam} WIB</Text>
                
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>Layanan</Text>
                                <Text style={{ color:'#000000' }}>{capitalizeEveryFirstLetterEachWord(printJadwal.kelas)}</Text>
                
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                    }}
                                />
                
                                <View style={pesananStyle.hargaBox}>
                                    <Text style={pesananStyle.textDewasa}>Dewasa x 1</Text>
                                    <Text style={pesananStyle.harga}>Rp. {printJadwal.harga}</Text>
                                </View>
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        marginTop: 10
                                    }}
                                />

                                <Text style={{ fontWeight: 'bold', color: 'black', marginTop:10, }}>Status</Text>
                                <Text style={{ color: 'green'}}>{capitalizeEveryFirstLetterEachWord(printJadwal.status)}</Text>
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
                    <View style={pesananStyle.box}>
                        <Text style={pesananStyle.title}>Kapalzy</Text>
                        <Text style={pesananStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>
                        
                        <View style={pesananStyle.maaf}>
                            <Text style={pesananStyle.maafText}>Anda belum pernah membuat pemesanan</Text>
                            <Fontisto style={pesananStyle.Icon} name="ship" size={30} color="#518fed"/>
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
            {/* <Text style={{ color:'#000000' }}>{Pemesanan.uId}</Text>
            <Text style={{ color:'#000000' }}>{Pemesanan.nama}</Text>
            <Text style={{ color:'#000000' }}>{Pemesanan.keberangkatan}</Text>
            <Text style={{ color:'#000000' }}>{Pemesanan.tujuan}</Text> */}

            </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default PesananScreen