import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getNotes, createNote, deleteNote, editNote} from './src/utils/api';
import { useState, useEffect} from 'react';
import {INote} from './src/utils/interfaces';
import {useData} from './src/features/custom-hooks';
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Home, Detail, Ajout } from "./src/pages";
import { useStyles } from "./src/utils/style";
import React from "react";
import { MHeader } from "./src/components/atoms";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

  const [notes, setNotes] = useState([] as INote[]);

  useEffect(() => {
    getNotes().then((res:any) => setNotes(res));
  },[])

  console.log(notes)

  const Tab = createBottomTabNavigator();

export default function App() {
  const styles = useStyles();
  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <SafeAreaView style={styles.global}>
        <MHeader>Username</MHeader>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return <AntDesign name="home" size={24} color="black" />;
              },
            }}
          />
          <Tab.Screen
            name="Detail"
            component={Detail}
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <Ionicons
                    name="ios-document-outline"
                    size={24}
                    color="black"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Ajout"
            component={Ajout}
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return <Feather name="file-plus" size={24} color="black" />;
              },
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
