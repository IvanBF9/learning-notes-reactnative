import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyList, EditNote } from "../pages";

const Stack = createNativeStackNavigator();

const MyNotesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="MyList"
        component={MyList}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditNote"
        component={EditNote}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyNotesStack;
