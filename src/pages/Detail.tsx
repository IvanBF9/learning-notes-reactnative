import React, { useEffect, useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Ionicons } from "@expo/vector-icons";
import { NotesContext } from "../utils/contexts";

export default function Detail({ navigation }: { navigation: any }) {
  const [notes, setNotes] = useState({} as INote);

  const styles = useStyles();
  const route = useRoute();
  const { itemId } = route.params;
  const {AllNotes, setAllNotes} = useContext(NotesContext);

  useEffect(() => {
    const _notes:any = AllNotes;
    setNotes(_notes.find((e: INote) => e._id == itemId));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{ ...styles.buttonCustom1 }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            style={{ ...styles.buttonIcon }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.py20}>
        {notes.anonym ? (
          <MText style={styles.author}>Auteur anonyme</MText>
        ) : (
          <MText style={styles.author}>Auteur : {notes.author}</MText>
        )}
        <MText style={styles.author}>{notes.creation_date}</MText>
        <MTitle>{notes.title}</MTitle>
        <MText>{notes.text}</MText>
      </View>
    </View>
  );
}
