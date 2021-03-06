import React from "react";
import { Text, TextStyle } from "react-native";
import { useStyles } from "../../utils/style";

export default function Mtext({
  children,
  style = {},
  ...other
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) {
  const styles = useStyles();

  return (
    <Text style={{ ...styles.texte, ...style }} {...other}>
      {children}
    </Text>
  );
}
