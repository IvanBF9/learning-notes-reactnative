import AsyncStorage from '@react-native-async-storage/async-storage';

const getName = async () => {
    try{
        return await AsyncStorage.getItem('name');
    }catch(err){
        console.log(err);
    }
}

const setName = async (value: string) => {
    try {
        await AsyncStorage.setItem('name', value)
        return value;
    } catch (e) {
        console.log(e);
    }
}

export {getName, setName};