import React from "react";
import { View, Text, TextStyle } from "react-native";
import { useStyles } from "../../utils/style";

export default function MHeader({
  children,
  style = {},
  ...other
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) {
  const styles = useStyles();

  return (
    <View style={{ ...styles.headerBox, ...style }} {...other}>
      <Text style={{ ...styles.headerTitre, ...style }} {...other}>
        {children}
      </Text>
    </View>
  );
}
