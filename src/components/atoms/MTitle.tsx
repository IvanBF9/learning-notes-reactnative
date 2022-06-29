import React from "react";
import { Text, TextStyle } from "react-native";
import { useStyles } from "../../utils/style";

export default function MTitle({
  children,
  style = {},
  ...other
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) {
  const styles = useStyles();

  return (
    <Text style={{ ...styles.titre, ...style }} {...other}>
      {children}
    </Text>
  );
}
