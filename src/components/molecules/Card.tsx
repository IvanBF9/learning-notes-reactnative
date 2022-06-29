import React from "react";
import { Text, TextStyle, View, ViewBase } from "react-native";
import { useStyles } from "../../utils/style";

export default function Card({
  title,
  children,
  style = {},
  ...other
}: {
  title: string;
  children: React.ReactNode;
  style?: TextStyle;
}) {
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <Text style={{ ...styles.texte, ...style }} {...other}>
        {title}
      </Text>
    </View>
  );
}
