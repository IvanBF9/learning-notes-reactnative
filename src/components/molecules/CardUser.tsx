import React, { useState, useContext } from "react";
import { NotesContext } from "../../utils/contexts";
import {getNotes} from '../../utils/api';

import {
  Alert,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewBase,
} from "react-native";
import { useStyles } from "../../utils/style";
import { MText } from "../atoms";
import { Foundation } from "@expo/vector-icons";
import { deleteNote } from "../../utils/api";
import { DeleteNote } from "../../utils/interfaces";

export default function Card({
  id,
  title,
  text,
  anonym,
  author,
  tags,
  navigation,
  children,
  style = {},
  ...other
}: {
  id: string;
  title: string;
  text: string;
  anonym: boolean;
  author?: string;
  tags?: string[];
  navigation: any;
  children: React.ReactNode;
  style?: TextStyle;
}) {
  const {AllNotes, setAllNotes} = useContext(NotesContext);
  const styles = useStyles();

  const alerte = () => Alert.alert("Note supprimée");

  const deleteItem = (val: DeleteNote) => {
    deleteNote(id).then(() => {
      alerte();
      getNotes().then((nts:any) => {
        setAllNotes(nts);
      });
    });
  };

  return (
    <View style={styles.cardUser}>
      <View>
        <MText style={{ ...styles.cardTitle, ...style }} {...other}>
          {title}
        </MText>
        <MText style={{ ...styles.texte, ...style }} {...other}>
          {text}
        </MText>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditNote", {
              itemId: id,
            });
          }}
          style={{ ...styles.buttonCustom1 }}
        >
          <Foundation name="page-edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteItem}
          style={{ ...styles.buttonCustom1 }}
        >
          <Foundation name="page-delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
