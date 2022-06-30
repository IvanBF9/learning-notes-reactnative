import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";

export default function Detail({ navigation }: { navigation: any }) {
  const [notes, setNotes] = useState({} as INote);

  const styles = useStyles();
  const route = useRoute();
  const { itemId } = route.params;

  useEffect(() => {
    getNotes().then((notes: any) => {
      setNotes(notes.find((e: INote) => e._id == itemId));
    });
  }, []);
  console.log(notes);
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Retour
      </Text>
      {notes.anonym ? (
        <Text style={styles.author}>Auteur anonyme</Text>
      ) : (
        <Text style={styles.author}>Auteur : {notes.author}</Text>
      )}
      <Text>{notes.creation_date}</Text>
      <MTitle>{notes.title}</MTitle>
      <Text>{notes.text}</Text>
    </View>
  );
}
/*
const [notes, setNotes] = useState({} as INote);

  const styles = useStyles();
  const route = useRoute();
  const { itemId } = route.params;

  useEffect(() => {
    getNotes().then((notes: any) => {
      setNotes(notes.find((e: INote) => e._id == itemId));
    });
  }, []);*/
