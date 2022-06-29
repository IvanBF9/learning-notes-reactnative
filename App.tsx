import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Detail} from './src/pages';
import Ionicons from '@expo/vector-icons/Ionicons';
import {getNotes, createNote, deleteNote, editNote} from './src/utils/api';
import { useState, useEffect} from 'react';
import {INote} from './src/utils/interfaces';
import {useData} from './src/features/custom-hooks';

export default function App() {

  const [notes, setNotes] = useState([] as INote[]);

  useEffect(() => {
    getNotes().then((res:any) => setNotes(res));
  },[])

  console.log(notes)

  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size, focused}) => {
            return <Ionicons name="md-checkmark-circle" size={32} color="green" />
          },
        }} />
        <Tab.Screen name="Detail" component={Detail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
