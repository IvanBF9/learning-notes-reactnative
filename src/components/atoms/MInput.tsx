import React from "react";
import { TextInputProps } from "react-native";
import { View, Text, TextStyle, Button, TextInput } from "react-native";
import { useStyles } from "../../utils/style";

export default function MInput({
  children,
  style = {},
  ...other
}: {
  children: React.ReactNode;
  style?: TextStyle;
  other: any;
}) {
  const styles = useStyles();

  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      {...other}
      /*onChangeText={(text) =>
          setFocusItem((old) => {
            return { ...old, subject: text };
          })
        }
        value={focusItem.subject}*/
    />
  );
}
