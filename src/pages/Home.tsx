import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader, MInput } from "../components/atoms";
import { SearchBar } from "../components/molecules";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Card } from "../components/molecules";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ajout from "./Ajout";

export default function Home({ navigation }: { navigation: any }) {
  const isfocused = useIsFocused();
  const Stack = createNativeStackNavigator();
  const styles = useStyles();
  const [notes, setNotes] = useState([] as INote[]);
  const [tags, setTags] = useState([] as string[]);
  const [displayedTags, setDisplayedTags] = useState(tags as string[]);
  const [searchval, setSearchval] = useState("");

  useEffect(() => {
    setDisplayedTags(
      tags.filter((tag: string) =>
        tag.toUpperCase().includes(searchval.toUpperCase())
      )
    );
  }, [searchval]);

  useEffect(() => {
    getNotes().then((res: any) => setNotes(res));
  }, [isfocused]);

  useEffect(() => {
    const _tags: string[] = [];

    notes.map((note: INote) => {
      const tg = note.tags;
      for (const _t of tg) {
        if (!_tags.includes(_t)) {
          _tags.push(_t);
        }
      }
    });

    setTags(_tags);
  }, [notes]);

  console.log(displayedTags);

  //console.log(notes);

  return (
    <View>
      <SearchBar onChangeText={setSearchval} style={styles.searchBar}>
        Recherche
      </SearchBar>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.py20}>
          <Text
            style={styles.titre}
            onPress={() => {
              navigation.navigate("Detail");
            }}
          >
            Appuyez sur une note pour afficher plus de détails
          </Text>
        </View>

        {notes.map((item, index) => {
          return (
            <Card
              style={{ overflow: "hidden", maxHeight: 40 }}
              key={index}
              id={item._id}
              title={item.title}
              anonym={item.anonym}
              author={item.author}
              text={item.text}
              tags={item.tags}
              children={undefined}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
