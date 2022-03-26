import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Image} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import RouteHome from './route/RouteHome';
import RoutePesanan from './route/RoutePesanan';
import PembatalanScreen from './screens/PembatalanScreen';
import LainnyaScreen from './screens/LainnyaScreen';


const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <NavigationContainer>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ fontWeight:'bold', marginBottom:20, color: '#2196F3', fontSize:20, }}>IDENTITAS MAHASISWA</Text>
                    <Image 
                        style={styles.Image}
                        source={require('./images/profile.png')}
                    ></Image>
                    <Text style={{ fontWeight:'bold', color:'#000000' }}>Aulia Rahman Zulfi</Text>
                    <Text style={{ fontWeight:'bold', color:'#000000' }}>119140110</Text>
                    <Text style={{ fontWeight:'bold', marginBottom:30, color:'#000000' }}>Pengembangan Aplikasi Mobile - RD</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose, { marginTop:10, }]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
                </View>

            </Modal>
            <Tab.Navigator
            
                screenOptions={({ route } ) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Pesanan') {
                        iconName = focused ? 'reader' : 'reader-outline';
                    }else if (route.name === 'Pembatalan') {
                        iconName = focused ? 'ios-journal' : 'ios-journal-outline';
                    }else if (route.name === 'Lainnya') {
                        iconName = focused ? 'menu' : 'menu-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#518fed',
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: true
                })}
            >
                <Tab.Screen 
                    name="Home" 
                    component={RouteHome} 
                    options={{ headerShown: false, unmountOnBlur: true}} 
                />
                <Tab.Screen 
                    name="Pesanan" 
                    component={RoutePesanan}  
                    options={{
                        title: 'Daftar Pemesanan',
                        headerStyle: {
                          backgroundColor: '#518fed',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          alignItems: 'center',
                        },
                        headerTitleAlign: 'center',
                        unmountOnBlur: true
                      }}
                />
                <Tab.Screen 
                    name="Pembatalan" 
                    component={PembatalanScreen} 
                    options={{
                        title: 'Daftar Pembatalan',
                        headerStyle: {
                          backgroundColor: '#f04313',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          alignItems: 'center',
                        },
                        headerTitleAlign: 'center',
                        unmountOnBlur: true
                      }}
                />
                <Tab.Screen 
                    name="Lainnya" 
                    component={LainnyaScreen} 
                    listeners={ () => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            setModalVisible(true);
                        },
                    })}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


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
      elevation: 5,
      width: '80%',
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      width: '100%',
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
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    Image:{
      resizeMode: 'contain',
      height: 300,
      marginBottom: 20,
    },
  });
  

export default MainScreen