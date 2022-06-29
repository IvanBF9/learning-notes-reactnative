import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useStyles } from "../utils/style";
import { MHeader, MText, MTitle, MInput } from "../components/atoms";

export default function Ajout({ navigation }: { navigation: any }) {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <MTitle>Ajout</MTitle>
      <Text
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Go to home
      </Text>
      <MInput placeholder="Titre">Ajouter</MInput>
      <MInput placeholder="Contenu" multiline numberOfLines={4}>
        Ajouter
      </MInput>
    </View>
  );
}
