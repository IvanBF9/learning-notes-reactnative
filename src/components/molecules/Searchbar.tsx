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
  onChangeText,
  children,
  style = {},
  ...other
}: {
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  children?: React.ReactNode;
  style?: TextStyle;
  other?: any;
}) {
  const styles = useStyles();
  return (
    <TextInput
      style={{ ...styles.searchInput, ...style }}
      {...other}
      placeholder="Rechercher un tag ou un auteur"
    />
  );
}
