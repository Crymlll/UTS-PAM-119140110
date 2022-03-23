import * as React from 'react';
import { View, Text } from 'react-native';

const PembatalanScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => navigation.navigate('Home')}>pembatalan Screen</Text>
        </View>
    )
}

export default PembatalanScreen