import React from 'react'
import { View, Text, StyleSheet, Colors } from 'react-native';


const formStyle = StyleSheet.create({
    outer:{
        width: '100%',
        height: '100%',
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
        marginBottom: '20%',
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
        fontWeight: 'bold',
        color:'#000000'
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
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
    }
})

export default formStyle;