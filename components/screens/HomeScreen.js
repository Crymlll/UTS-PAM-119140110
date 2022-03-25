import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Button, SafeAreaView, ScrollView } from 'react-native';
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


import formStyle from '../assets/Home/HomeScreenStyle';

const HomeScreen = ({navigation}) => {

    const [text, onChangeText] = useState({
        keberangkatan: '',
        tujuan: '',
        kelas: '',
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
        <View style={formStyle.outer}>
            <SafeAreaView>
            <ScrollView>
        <View style={formStyle.box}>

            <Text style={formStyle.title}>Kapalzy</Text>
            <Text style={formStyle.titleSub}>by Aulia Rahman Zulfi(119140110)</Text>
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Pelabuhan Awal</Text>
                <View style={formStyle.formDateTime}>
                    <Fontisto style={formStyle.Icon} name="ship" size={30} color="#518fed"/>
                    <Picker
                        selectedValue={text.keberangkatan}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, keberangkatan: itemValue})}
                        >
                        <Picker.Item label="Pilih Pelabuhan Awal" value="0" />
                        <Picker.Item label="Merak" value="merak" />
                        <Picker.Item label="Bakauheni" value="bakauheni" />
                        <Picker.Item label='Tanjung Priok' value="tanjung priok" />
                        <Picker.Item label='Batam' value="batam" />
                  </Picker>
                </View>
            </View>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Pelabuhan Tujuan</Text>
                <View style={formStyle.formDateTime}>
                <Fontisto style={formStyle.Icon} name="ship" size={30} color="#518fed"/>
                    <Picker
                        selectedValue={text.tujuan}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, tujuan: itemValue})}
                        >
                        <Picker.Item label="Pilih Pelabuhan Tujuan" value="0" />
                        <Picker.Item label="Merak" value="merak" />
                        <Picker.Item label="Bakauheni" value="bakauheni" />
                        <Picker.Item label='Tanjung Priok' value="tanjung priok" />
                        <Picker.Item label='Batam' value="batam" />
                  </Picker>
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Kelas Layanan</Text>
                <View style={formStyle.formDateTime}>
                    <MaterialIcons style={formStyle.Icon} name="airline-seat-recline-normal" size={30} color="#518fed"/>
                    <Picker
                        selectedValue={text.kelas}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, kelas: itemValue})}
                        >
                        <Picker.Item label="Pilih Layanan" value="0" />
                        <Picker.Item label="Reguler" value="reguler" />
                        <Picker.Item label="Eksekutif" value="eksekutif" />
                        <Picker.Item label='Bisnis' value="bisnis" />
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
        </ScrollView>
        </SafeAreaView>
    </View>
    )
}


export default HomeScreen