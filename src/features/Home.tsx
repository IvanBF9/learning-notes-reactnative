import React from 'react';
import {View, Text} from 'react-native';

export default function Home({ navigation } : { navigation:any}){



    return(
        <View>
            <Text>
                Home
            </Text>
            <Text onPress={() => {navigation.navigate('Detail')}}>
                Go to detail
            </Text>
        </View>
    )
}