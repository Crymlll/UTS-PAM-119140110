import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import RouteHome from './route/RouteHome';
import PembatalanScreen from './screens/PembatalanScreen';
import PesananScreen from './screens/PesananScreen';
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
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
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
                    options={{ headerShown: false, }} 
                />
                <Tab.Screen 
                    name="Pesanan" 
                    component={PesananScreen}  
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
                      }}
                />
                <Tab.Screen 
                    name="Pembatalan" 
                    component={PembatalanScreen} 
                    options={{
                        title: 'Daftar Pembatalan',
                        headerStyle: {
                          backgroundColor: '#518fed',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          alignItems: 'center',
                        },
                        headerTitleAlign: 'center',
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
      borderRadius: 20,
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
      borderRadius: 20,
      padding: 10,
      elevation: 2
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
    }
  });
  

export default MainScreen