import React, {useState, useEffect, useContext} from "react";
import { View, Text, SafeAreaView, Button, Switch, Alert, PermissionsAndroid, Image } from "react-native";
import { useStyles } from "../utils/style";
import { MHeader, MText, MTitle, MInput } from "../components/atoms";
import {getNotes, createNote, deleteNote, editNote} from '../utils/api';
import {CreateNote} from '../utils/interfaces';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { NotesContext } from '../utils/contexts';
import { getName } from "../utils/storage";
import * as ImagePicker from 'expo-image-picker';



export default function Ajout({ navigation }: { navigation: any }) {

  const [image, setImage] = useState('');


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      width: 200, 
      height: 200,
      quality: 0,
      base64: true
    });

    if (!result.cancelled) {
      if (result.base64){
        setImage(`data:image/${result.type};base64,${result.base64}`);
      }
      
    }
  };


  const {AllNotes, setAllNotes} = useContext(NotesContext);
  const [note, setNote] = useState({} as CreateNote);
  const [anonym, setAnonym] = useState(false);

  const splitTags = (val: string) => {
    return val.split(",") as [];
  };


  const setKey = {
    title: (val: string) =>
      setNote((old: CreateNote) => {
        return { ...old, title: val };
      }),
    author: (val: string) =>
      setNote((old: CreateNote) => {
        return { ...old, author: val };
      }),
    anonym: (val: boolean) =>
      setNote((old: CreateNote) => {
        return { ...old, anonym: val };
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

  const create = (val:CreateNote) => {
    const {title, text} = val;
    if (title && text && title.length > 3 && text.length > 0){
      val.image = image;
      createNote(val).then( e => {
        getNotes().then((notes: any) => {
          setAllNotes(notes)
        });
        navigation.navigate('Home');
        setNote({} as CreateNote);
      });
    } else {
      alerte();
    }
  };

  const _Send = () => {
    const val = { ...note };
    val.anonym = anonym;
    if (!val.tags) val.tags = [];

    if (anonym) {
      val.author = "";
      return create(val);
    }
    getName().then((name: any) => {
      val.author = name;
      return create(val);
    });
  };

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.pb20}>
          <Text style={styles.titre}>Ajoutez une note ici</Text>
        </View>
        <MInput
          value={note.title}
          onChangeText={setKey.title}
          placeholder="Titre"
        >
        </MInput>
        <MInput
          value={note.text}
          onChangeText={setKey.text}
          placeholder="Contenu"
          multiline
          numberOfLines={4}
        >
        </MInput>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> : null}
          <Button title="Ajouter une image" onPress={pickImage} />
        </View>
        <MInput
          value={tagsToString()}
          onChangeText={setKey.tags}
          placeholder="Tags séparés par des virgules"
        >
        </MInput>
        <View style={{ flexDirection: "row" }}>
          <MText style={{ margin: 8 }}>Anonyme</MText>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setAnonym}
            value={anonym}
          />
        </View>
        <Button onPress={_Send} title="Ajouter"></Button>
      </KeyboardAwareScrollView>
    </View>
  );
}
