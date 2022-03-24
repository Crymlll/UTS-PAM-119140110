import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PesananScreen from '../screens/PesananScreen';
import DetailPesananScreen from '../screens/DetailPesananScreen';

const Stack = createNativeStackNavigator();

function RoutePesanan() {
  return (
    <Stack.Navigator initialRouteName='PesananScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="PesananScreen" component={PesananScreen} />
      <Stack.Screen name="DetailPesananScreen" component={DetailPesananScreen} />
    </Stack.Navigator>
  );
}

export default RoutePesanan;