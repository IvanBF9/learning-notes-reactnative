import React, { useEffect, useState, useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { getNotes, createNote, deleteNote, editNote } from "../utils/api";
import { INote } from "../utils/interfaces";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardUser } from "../components/molecules";
import { getName } from "../utils/storage";
import { useIsFocused } from "@react-navigation/native";
import { NotesContext } from '../utils/contexts';

export default function MyList({ navigation }: { navigation: any }) {
  const isfocused = useIsFocused();
  const {AllNotes, setAllNotes} = useContext(NotesContext);
  const [notes, setNotes] = useState([] as INote[]);
  const styles = useStyles();
  const Stack = createNativeStackNavigator();

  /*/useEffect(() => {
    getName().then((name) => {
      getNotes().then((notes: any) => {
        setAllNotes(notes.filter((note: INote) => note.author == name));
      });
    });
  }, [isfocused]);*/

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.py20}>
        <Text style={styles.titre}>Modifier - filtrer par author == user</Text>
        <Text
          style={styles.texte}
          onPress={() => {
            navigation.navigate("EditNote");
          }}
        >
          Go to detail
        </Text>
      </View>

      {AllNotes.map((item, index) => {
        return (
          <CardUser
            style={{ overflow: "hidden", height: 80 }}
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
