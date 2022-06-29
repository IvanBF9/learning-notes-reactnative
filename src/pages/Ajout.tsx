import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useStyles } from "../utils/style";
import { MHeader, MText, MTitle, MInput } from "../components/atoms";

export default function Ajout({ navigation }: { navigation: any }) {
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
    </View>
  );
}
