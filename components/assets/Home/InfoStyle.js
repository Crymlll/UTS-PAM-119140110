import React from 'react'
import { View, Text, StyleSheet, Colors } from 'react-native';

const infoStyle = StyleSheet.create({
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
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
    iconInput:{
        padding: 10,
    },
    input:{
        flex: 1,
        backgroundColor: '#fff',
        color: '#000000',
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
    boxGray:{
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 0,
        marginBottom: 20,
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
    buttonOuter:{
        backgroundColor: '#ed7c31',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: '5%',
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%'
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    outerBox:{
        marginBottom: 20,
    },
})

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      paddingLeft: '20%',
      paddingRight: '20%',
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#518fed',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalText: {
      textAlign: "center",
      color: '#000000',
    }
  });

export { infoStyle, styles }