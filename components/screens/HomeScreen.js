import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id');


import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { isLogBoxErrorMessage } from 'react-native/Libraries/LogBox/Data/LogBoxData';


const HomeScreen = ({navigation}) => {

    const [text, onChangeText] = useState({
        keberangkatan: '',
        tujuan: '',
        kelas: 'reguler',
        tanggal: 'Kamis, 7 April 2022',
        jam: '11:40',
    });

    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }

    const [isPickerShow, setIsPickerShow] = useState(false);
    const [isPickerShowTime, setIsPickerShowTime] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [time, setTime] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };
    const showPickerTime= () => {
        setIsPickerShowTime(true);
    };

    const onChange = (event, value) => {
        setIsPickerShow(false);
        setDate(value);
        onChangeText({ ...text, tanggal: dateFormatDayMonthYear(value) });
    };

    const onChangeTime = (event, value) => {
        setIsPickerShowTime(false);
        setTime(value);
        onChangeText({ ...text, jam: timeFormatHoursAndMinutes(value) });
    };


    let dateFormatDayMonthYear = (date) => {
        let dateFormat = moment(date).format('dddd, D MMMM YYYY');
        return dateFormat;
    }

    let timeFormatHoursAndMinutes = (time) => {
        let timeFormat = moment(time).format('HH:mm');
        return timeFormat;
    }

    let onlyGetHoursAndMinutes = (date) => {
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    return (
        <View style={formStyle.box}>
            <Text style={formStyle.title}>Kapalzy</Text>
            <Text style={formStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Pelabuhan Awal</Text>
                <View style={formStyle.formSingle}>
                    <Fontisto style={formStyle.Icon} name="ship" size={30} color="#518fed"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Pilih Pelabuhan Awal"
                        value={text.keberangkatan}
                        onChangeText={clickHandler('keberangkatan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Pelabuhan Tujuan</Text>
                <View style={formStyle.formSingle}>
                <Fontisto style={formStyle.Icon} name="ship" size={30} color="#518fed"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Pilih Pelabuhan Tujuan"
                        value={text.tujuan}
                        onChangeText={clickHandler('tujuan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Kelas Layanan</Text>
                <View style={formStyle.formDateTime}>
                    <MaterialIcons style={formStyle.Icon} name="airline-seat-recline-normal" size={30} color="#518fed"/>
                    <Picker
                        selectedValue={text.kelas}
                        style={{ width: '80%' }}
                        onValueChange={(itemValue) => onChangeText({...text, kelas: itemValue})}
                    >
                        <Picker.Item label="Penumpang Reguler" value="reguler" />
                        <Picker.Item label="Penumpang Eksekutif" value="eksekutif" />
                        <Picker.Item label='Penumpang Bisnis' value="bisnis" />
                  </Picker>
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Tanggal Keberangkatan</Text>
                <View style={formStyle.formDateTime}>
                    <MaterialCommunityIcons onPress={showPicker} style={formStyle.Icon} name="calendar-month" size={30} color="#518fed"/>
                    {!isPickerShow && (
                        <View style={formStyle.btnContainer}>
                        </View>
                    )}
                    {/* The date picker */}
                    {isPickerShow && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onChange}
                            style={formStyle.datePicker}
                        />
                    )}
                    <View style={formStyle.pickedDateContainer}>
                        <Text onPress={showPicker} style={formStyle.pickedDate}>Tanggal Dipilih : {moment(date).format('D MMMM YYYY')}</Text>
                    </View>
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Jam Masuk Pelabuhan</Text>
                <View style={formStyle.formDateTime}>
                    <Feather onPress={showPickerTime} style={formStyle.Icon} name="clock" size={30} color="#518fed"/>
                    {!isPickerShowTime && (
                        <View style={formStyle.btnContainer}>
                        </View>
                    )}
                    {/* The date picker */}
                    {isPickerShowTime && (
                        <DateTimePicker
                            value={date}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onChangeTime}
                            style={formStyle.datePicker}
                        />
                    )}
                    <View style={formStyle.pickedDateContainer}>
                        <Text onPress={showPickerTime} style={formStyle.pickedDate}>Jam Dipilih : {moment(time).format('HH:mm')}</Text>
                    </View>
                </View>
            </View>

            <View style={formStyle.ticket}>
                <Text style={formStyle.textTicket}>Dewasa</Text>
                <Text style={formStyle.textTicket}>1 Orang</Text>
            </View>

            <View style={formStyle.package}>
                <TouchableOpacity 
                    style={formStyle.button}
                    onPress={() => navigation.navigate('DetailScreen', {data: text})}
                    // onPress={() => (console.log(text))}
                >
                    <EvilIcons style={formStyle.Icon} name="search" size={30} color="white"/>
                    <Text style={formStyle.textButton}>Buat Tiket</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const formStyle = StyleSheet.create({
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
    formDateTime:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        marginTop: 5,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    Icon:{
        padding: 10,
    },
    Input:{
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
    },
    ticket:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#dbdbdb',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#969696',
        padding: 10,
    },
    textTicket:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed7c31',
        borderRadius: 5,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        alignItems: 'flex-start',
    },
    pickedDate: {
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default HomeScreen