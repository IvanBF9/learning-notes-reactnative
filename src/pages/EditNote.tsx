import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader, MInput } from "../components/atoms";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Ionicons } from "@expo/vector-icons";

export default function EditNote({ navigation }: { navigation: any }) {
  const [notes, setNotes] = useState({} as INote);

  const styles = useStyles();
  const route = useRoute();
  const { itemId } = route.params;

  const date = new Date(notes.creation_date);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  const dateNote = day + "/" + month + "/" + year + " à " + hour + ":" + minute;

  /*const setKey = {
    title: (val: string) =>
      setNote((old: CreateNote) => {
        return { ...old, title: val };
      }),
    text: (val: string) =>
      setNote((old: CreateNote) => {
        return { ...old, text: val };
      }),
    tags: (val: string) =>
      setNote((old: CreateNote) => {
        return { ...old, tags: splitTags(val) };
      }),
  };

  const tagsToString = () => {
    if (note.tags) return note.tags.join();
    return "";
  };

  const alerte = () =>
    Alert.alert(
      "Formulaire invalide",
      "Merci de remplir un minimum les champs titre et texte !",
      [{ text: "OK" }]
    );

  const create = (val: CreateNote) => {
    const { title, text } = val;
    if (title && text && title.length > 3 && text.length > 0) {
      createNote(val).then((e) => {
        navigation.navigate("Home");
        setNote({} as CreateNote);
      });
    } else {
      alerte();
    }
  };

  const _Send = () => {
    const val = { ...note };
    getName().then((name: any) => {
      val.author = name;
      return create(val);
    });
  };*/

  useEffect(() => {
    getNotes().then((notes: any) => {
      setNotes(notes.find((e: INote) => e._id == itemId));
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyList");
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
        <Text style={styles.titre}>Editez cette note</Text>
      </View>

      <View style={styles.py20}>
        <MText style={styles.author}>Publié le {dateNote}</MText>
      </View>
      <View style={styles.py20}>
        <MTitle>{notes.title}</MTitle>
        <MText>{notes.text}</MText>
      </View>
    </View>
  );
}
/*<Input value="toto" onChangeText={setKey.title}>
          {notes.title}
        </Input>*/
