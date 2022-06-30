import React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewBase,
} from "react-native";
import { useStyles } from "../../utils/style";
import { MText } from "../atoms";
import { Foundation } from "@expo/vector-icons";

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
    <View style={styles.cardUser}>
      <View>
        <MText style={{ ...styles.cardTitle, ...style }} {...other}>
          {title}
        </MText>
        <MText style={{ ...styles.texte, ...style }} {...other}>
          {text}
        </MText>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditNote", {
              itemId: id,
            });
          }}
          style={{ ...styles.buttonCustom1 }}
        >
          <Foundation name="page-edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          //onPress={delete}
          style={{ ...styles.buttonCustom1 }}
        >
          <Foundation name="page-delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
