import * as React from 'react';
import { View, Text, StyleSheet, Modal} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import RouteHome from './route/RouteHome';
import PembatalanScreen from './screens/PembatalanScreen';
import PesananScreen from './screens/PesananScreen';
import LainnyaScreen from './screens/LainnyaScreen';


const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {

    
    return (
        <NavigationContainer>
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
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen