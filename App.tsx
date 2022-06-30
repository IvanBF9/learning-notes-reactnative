import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Pages
import { Home, Detail, Ajout, MyList } from "./src/pages";
import UserPage from "./src/pages/splash/Username";
// Utils
import { getNotes, createNote, deleteNote, editNote } from "./src/utils/api";
import { INote } from "./src/utils/interfaces";
import { useStyles } from "./src/utils/style";
import { MHeader } from "./src/components/atoms";
import { getName, setName } from "./src/utils/storage";
// Icons
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { TabNavigation } from "./src/routes";

export default function App() {
  const [notes, setNotes] = useState([] as INote[]);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user != "") {
      setName(user);
    }
  }, [user]);

  useEffect(() => {
    getName().then((usr: any) => {
      console.log(usr);
      if (usr) setUser(usr);
    });
    getNotes().then((res: any) => setNotes(res));
  }, []);

  const styles = useStyles();

  return (
    <NavigationContainer>
      {user != "" ? (
        <SafeAreaView style={styles.global}>
          <MHeader setUser={setUser}>{user}</MHeader>
          <TabNavigation />
        </SafeAreaView>
      ) : (
        <UserPage setUser={setUser} />
      )}
    </NavigationContainer>
  );
}
