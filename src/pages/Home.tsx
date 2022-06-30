import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Card } from "../components/molecules";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ajout from "./Ajout";

export default function Home({ navigation }: { navigation: any }) {
  const Stack = createNativeStackNavigator();
  const styles = useStyles();
  const [notes, setNotes] = useState([] as INote[]);

  useEffect(() => {
    getNotes().then((res: any) => setNotes(res.reverse()));
  });

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.py20}>
        <MText style={styles.titre}>
          Appuyez sur une note pour voir le détail
        </MText>
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
  );
}
