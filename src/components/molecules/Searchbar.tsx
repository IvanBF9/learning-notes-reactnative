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
  const styles = useStyles();
  return (
    <TextInput
      style={{ ...styles.searchInput, ...style }}
      {...other}
      placeholder="Rechercher un tag ou un auteur"
    />
  );
}
