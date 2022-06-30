import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, Button, Switch, Alert, PermissionsAndroid } from "react-native";
import { useStyles } from "../utils/style";
import { MHeader, MText, MTitle, MInput } from "../components/atoms";
import {getNotes, createNote, deleteNote, editNote} from '../utils/api';
import {CreateNote} from '../utils/interfaces';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { getName } from "../utils/storage";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export default function Ajout({ navigation }: { navigation: any }) {
  const [note, setNote] = useState({} as CreateNote);
  const [anonym, setAnonym] = useState(false);

  const splitTags = (val:string) => {
    return val.split(',') as [];
  }

  const _lib = () => {
    requestCameraPermission()
    //launchImageLibrary({mediaType: 'photo'}).then((e) => console.log(e));
  }

  const _pic = () => {
    launchCamera({mediaType: 'photo'});

  }

  const setKey = {
    title: (val:string) => setNote((old:CreateNote) => {return {...old, title: val}}),
    author: (val:string) => setNote((old:CreateNote) => {return {...old, author: val}}),
    anonym: (val:boolean) => setNote((old:CreateNote) => {return {...old, anonym: val}}),
    text: (val:string) => setNote((old:CreateNote) => {return {...old, text: val}}),
    tags: (val:string) => setNote((old:CreateNote) => {return {...old, tags: splitTags(val)}}),
  };

  const tagsToString = () => {
    if (note.tags) return note.tags.join();
    return '';
  }

  const alerte = () =>
    Alert.alert(
      "Formulaire invalide",
      "Merci de remplir un minimum les champs titre et texte !",
      [
        { text: "OK" }
      ]
  );

  const create = (val:CreateNote) => {
    const {title, text} = val;
    if (title && text && title.length > 3 && text.length > 0){
      createNote(val).then( e => {
        navigation.navigate('Home');
        setNote({} as CreateNote);
      })
    }else{
      alerte()
    }
  } 

  const _Send = () => {
    const val = {...note};
    val.anonym=anonym;
    if (!val.tags) val.tags = [];

    if (anonym) {
      val.author='';
      return create(val)
    }
    getName().then((name:any) => {
      val.author=name;
      return create(val);
    })
    
  }

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
      <MTitle>Ajout</MTitle>
      <MInput value={note.title} onChangeText={setKey.title} placeholder="Titre">Ajouter</MInput>
      <MInput value={note.text} onChangeText={setKey.text} placeholder="Contenu" multiline numberOfLines={4}>
        Ajouter
      </MInput>
      <MInput value={note.image} onChangeText={setKey.title} placeholder="Image">Ajouter</MInput>
      <MInput value={tagsToString()} onChangeText={setKey.tags} placeholder="Tags séparés par des virgules">Ajouter</MInput>
      <View style={{flexDirection: 'row',}}>
        <MText style={{margin: 8}}>Anonyme</MText>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setAnonym}
          value={anonym}
        />
      </View>
      <Button onPress={_Send} title="send"></Button>
      <Button onPress={_lib} title="test"></Button>
      <Button onPress={_pic} title="Pic"></Button>
      </KeyboardAwareScrollView>
    </View>
  );
}
