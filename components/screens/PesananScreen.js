import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Pemesanan } from '../database/pemesanan';

import Ionicons from 'react-native-vector-icons/Ionicons';

import pesananStyle from '../assets/Pesanan/PesananStyle';

const PesananScreen = ({navigation}) => {

    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }

    let findAllJadwal = () => {

        let listPemesanan = Pemesanan.filter( (x) => {
            return x.status == 'scheduled'
        })

        return listPemesanan.map( (printJadwal, i) => {
            // console.log(Pemesanan)
            // console.log(i)
            return (
                <View key={i}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailPesananScreen', {data: printJadwal.idPemesanan})}>
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

export default PesananScreen