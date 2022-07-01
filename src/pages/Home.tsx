import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useStyles } from "../utils/style";
import { SearchBar } from "../components/molecules";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Card } from "../components/molecules";
import { useIsFocused } from "@react-navigation/native";
// Context
import { NotesContext } from "../utils/contexts";

export default function Home({ navigation }: { navigation: any }) {
  const isfocused = useIsFocused();
  const styles = useStyles();

  // Context
  const { AllNotes, setAllNotes } = useContext(NotesContext);
  // states
  const [tags, setTags] = useState([] as string[]);
  const [authors, setAuthors] = useState([] as string[]);
  const [displayedAuthors, setDisplayedAuthors] = useState([] as string[]);
  const [displayedTags, setDisplayedTags] = useState([] as string[]);
  const [searchval, setSearchval] = useState('');
  // Filters states
  const [filterTag, setFilterTag] = useState('');
  const [filterAuthor, setFilterAuthor] = useState('');

  useEffect(() => {
    setDisplayedTags(tags.filter((tag:string) => tag.toUpperCase().includes(searchval.toUpperCase())));
    setDisplayedAuthors(authors.filter((aut:string) => aut.toUpperCase().includes(searchval.toUpperCase())));
  }, [searchval])
/*
  useEffect(() => {
    getNotes().then((res: any) => setAllNotes(res));
  }, [isfocused]);
*/
  useEffect(() => {
    const _tags: string[] = [];
    const _auteurs: string[] = [];

    AllNotes.map((note: INote) => {
      if (!_auteurs.includes(note.author) && typeof note.author == "string") {
        _auteurs.push(note.author);
      }
      for (const _t of note.tags){
        if (!_tags.includes(_t) && typeof note.author == 'string'){
          _tags.push(_t);
        }
      }
    });

    setAuthors(_auteurs);
    setTags(_tags);
  }, [AllNotes]);

  return (
    <View>
      <SearchBar onChangeText={setSearchval} style={styles.searchBar}>
        Recherche
      </SearchBar>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.py20}>
          <Text style={styles.titre}>
            Appuyez sur une note pour afficher plus de détails
          </Text>
        </View>

        {AllNotes.map((item, index) => {
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
