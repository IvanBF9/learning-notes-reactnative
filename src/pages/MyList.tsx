import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { getNotes, createNote, deleteNote, editNote } from "../utils/api";
import { INote } from "../utils/interfaces";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Card } from "../components/molecules";

export default function MyList({ navigation }: { navigation: any }) {
  const [notes, setNotes] = useState([] as INote[]);
  const styles = useStyles();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    getNotes().then((notes: any) => {
      setNotes(notes);
    });
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.titre}>Modifier - filtrer par author == user</Text>
      <Text
        style={styles.texte}
        onPress={() => {
          navigation.navigate("EditNote");
        }}
      >
        Go to detail
      </Text>
      {notes.map((item, index) => {
        return (
          <Card
          style={{overflow: 'hidden', maxHeight:40}}
            key={index}
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

