import React, {useEffect, useState} from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import {getNotes, createNote, deleteNote, editNote} from '../utils/api';
import {INote} from '../utils/interfaces';

export default function MyList({ navigation }: { navigation: any }) {

  const [notes, setNotes] = useState([] as INote[]);

  useEffect(() => {
    getNotes().then((notes:any) => {setNotes(notes);});
  }, []);

  const styles = useStyles();
  return (
    <ScrollView>
      {notes.map(note => {
        return <MText key={note._id}>{note.title}</MText>
      })}
    </ScrollView>
  );
}
