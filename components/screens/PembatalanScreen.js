import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Pemesanan } from '../database/pemesanan';

import Ionicons from 'react-native-vector-icons/Ionicons';

import pembatalanStyle from '../assets/Pembatalan/PembatalanStyle';

const PembatalanScreen = ({navigation}) => {
    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }

    let findAllJadwal = () => {

        
        let listPembatalan = Pemesanan.filter( (x) => {
            return x.status == 'canceled'
        })

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
                            <Text>{printJadwal.tanggal}</Text>
                            <Text>{printJadwal.jam} WIB</Text>
            
                            <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Layanan</Text>
                            <Text>{capitalizeEveryFirstLetterEachWord(printJadwal.kelas)}</Text>
            
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