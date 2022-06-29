import React from 'react';
import {View, Text} from 'react-native';

export default function Detail({ navigation } : { navigation:any}){
    return(
        <View>
            <Text>
                Detail
            </Text>
            <Text onPress={() => {navigation.navigate('Home')}}>
                Go to home
            </Text>
        </View>
    )
}