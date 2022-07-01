import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { Ajout } from "../pages";
import { HomeStack, MyNotesStack } from ".";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <AntDesign name="home" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="MyNotesStack"
        component={MyNotesStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-document-outline" size={24} color="black" />
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
  );
};

export default TabNavigation;
