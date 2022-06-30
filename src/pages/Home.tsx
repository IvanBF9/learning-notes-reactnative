import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Card } from "../components/molecules";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ajout from "./Ajout";

export default function Home({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const styles = useStyles();
  const [notes, setNotes] = useState([] as INote[]);

  useEffect(() => {
    getNotes().then((res: any) => setNotes(res));
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text
        style={styles.titre}
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        Home to detail
      </Text>
      {notes.map((item, index) => {
        return (
          <Card
            title={item.title}
            anonym={item.anonym}
            author={item.author}
            text={item.text}
            children={undefined}
          />
        );
      })}
    </ScrollView>
  );
}

/*<ScrollView style={styles.container}>
      <MTitle>Home</MTitle>
      <Text
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        Go to detail
      </Text>
      {notes.map((item, index) => {
        return (
          <Card
            title={item.title}
            anonym={item.anonym}
            author={item.author}
            text={item.text}
            children={undefined}
          />
        );
      })}
    </ScrollView>*/
