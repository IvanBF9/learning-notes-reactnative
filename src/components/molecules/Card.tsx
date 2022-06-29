import React from "react";
import { Text, TextStyle, View, ViewBase } from "react-native";
import { useStyles } from "../../utils/style";

export default function Card({
  title,
  text,
  anonym,
  author,
  children,
  style = {},
  ...other
}: {
  title: string;
  text: string;
  anonym: boolean;
  author?: string;
  children: React.ReactNode;
  style?: TextStyle;
}) {
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <Text style={{ ...styles.cardTitle, ...style }} {...other}>
        {title}
      </Text>
      <Text style={{ ...styles.texte, ...style }} {...other}>
        {text}
      </Text>

      <Text style={{ ...styles.author, ...style }} {...other}>
        {author}
        {anonym ? " true" : " false"}
      </Text>
    </View>
  );
}
