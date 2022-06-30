import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Card } from "../components/molecules";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ajout from "./Ajout";

export default function Home({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const isfocused = useIsFocused();
  const styles = useStyles();
  const [notes, setNotes] = useState([] as INote[]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getNotes().then((res: any) => setNotes(res.reverse()));
  }, [isfocused]);

  useEffect(() => {
    const _tags = [];

    notes.map((note:INote) => {

    });

  }, [notes]);

  //console.log(notes);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text
        style={styles.titre}
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        Home Go to detail
      </Text>
      {notes.map((item, index) => {
        return (
          <Card
            style={{ overflow: "hidden", maxHeight: 40 }}
            key={index}
            id={item._id}
            title={item.title}
            anonym={item.anonym}
            author={item.author}
            date={item.creation_date}
            text={item.text}
            tags={item.tags}
            children={undefined}
            navigation={navigation}
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
