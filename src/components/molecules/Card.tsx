import React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewBase,
} from "react-native";
import { useStyles } from "../../utils/style";

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
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", {
            itemId: id,
          });
        }}
      >
        <Text style={{ ...styles.cardTitle, ...style }} {...other}>
          {title}
        </Text>
        <Text style={{ ...styles.texte, ...style }} {...other}>
          {text}
        </Text>
        {anonym ? (
          <Text style={styles.author}>Auteur anonyme</Text>
        ) : (
          <Text style={styles.author}>{author}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
