import * as React from 'react';
import { View, Text } from 'react-native';

const LainnyaScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => navigation.navigate('Home')}>Lainnya Screen</Text>
        </View>
    )
}

export default LainnyaScreen