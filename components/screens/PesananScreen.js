import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Pemesanan } from '../database/pemesanan';

import Ionicons from 'react-native-vector-icons/Ionicons';

const PesananScreen = ({navigation}) => {

    let capitalizeEveryFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let capitalizeEveryFirstLetterEachWord = (string) => {
        return string.split(' ').map(word => capitalizeEveryFirstLetter(word)).join(' ');
    }

    let findAllJadwal = () => {
        return Pemesanan.map( (printJadwal, i) => {
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
                            <Text>{printJadwal.tanggal}</Text>
                            <Text>{printJadwal.jam} WIB</Text>
            
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>Layanan</Text>
                            <Text>{capitalizeEveryFirstLetterEachWord(printJadwal.kelas)}</Text>
            
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                }}
                            />
            
                            <View style={pesananStyle.hargaBox}>
                                <Text style={pesananStyle.textDewasa}>Dewasa x 1</Text>
                                <Text style={pesananStyle.harga}>Rp. {printJadwal.harga}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    return(
        <View style={{ backgroundColor: 'white' }}>
            {findAllJadwal()}
        </View>
    )
}

const pesananStyle = StyleSheet.create({
    boxGray:{
        alignSelf: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 0,
        padding: 20,
        width: '90%',
        top: '5%',
        shadowColor: '#000',
        elevation: 5,
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
})

export default PesananScreen