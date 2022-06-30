import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useStyles } from "../utils/style";
import { INote } from "../utils/interfaces";
import { CardUser } from "../components/molecules";
import { NotesContext, LoginContext } from "../utils/contexts";

export default function MyList({ navigation }: { navigation: any }) {
  const { AllNotes, setAllNotes } = useContext(NotesContext);
  const { user, setUser } = useContext(LoginContext);
  const [notes, setNotes] = useState([] as INote[]);
  const styles = useStyles();

  useEffect(() => {
    setNotes(AllNotes.filter((note: INote) => note.author == user));
  }, [AllNotes]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.py20}>
        <Text style={styles.titre}>
          Vous pouvez éditer ou supprimer une note ici
        </Text>
      </View>

      {notes.map((item, index) => {
        return (
          <CardUser
            style={{ overflow: "hidden", height: 40 }}
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
  );
}
