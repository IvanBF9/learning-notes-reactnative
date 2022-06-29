import React, {useState} from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { useStyles } from "../utils/style";
import { MHeader, MText, MTitle, MInput } from "../components/atoms";
import {getNotes, createNote, deleteNote, editNote} from '../utils/api';
import {CreateNote} from '../utils/api';

export default function Ajout({ navigation }: { navigation: any }) {

  const [note, setNote] = useState({} as CreateNote);

  const splitTags = (val:string) => {
    return val.split(',');
  }

  const setKey = {
    title: (val:string) => setNote((old:CreateNote) => {return old.title=val}),
    author: (val:string) => setNote((old:CreateNote) => {return old.author=val}),
    anonym: (val:boolean) => setNote((old:CreateNote) => {return old.anonym=val}),
    text: (val:string) => setNote((old:CreateNote) => {return old.text=val}),
    tags: (val:string) => setNote((old:CreateNote) => {return old.tags=splitTags(val)}),
  };

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <MTitle>Ajout</MTitle>
      <MInput placeholder="Titre">Ajouter</MInput>
      <MInput placeholder="Contenu" multiline numberOfLines={4}>
        Ajouter
      </MInput>
      <MInput placeholder="Image">Ajouter</MInput>
      <MInput placeholder="Tags séparés par des virgules">Ajouter</MInput>
      <Button title="send"></Button>
    </View>
  );
}
