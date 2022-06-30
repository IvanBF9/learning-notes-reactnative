import React from "react";
import {
  View,
  Text,
  TextStyle,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import { useStyles } from "../../utils/style";

export default function SearchBar({
  children,
  style = {},
  ...other
}: {
  children?: React.ReactNode;
  style?: TextStyle;
  other?: any;
}) {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      {...other}
      placeholder={children}
    />
  );
}

const styles = StyleSheet.create({
  input: {},
});
