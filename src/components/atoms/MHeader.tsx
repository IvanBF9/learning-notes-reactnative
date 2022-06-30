import React, { useState } from "react";
import { View, Text, TextStyle, Button, TouchableOpacity } from "react-native";
import { useStyles } from "../../utils/style";
import { MaterialIcons } from "@expo/vector-icons";

export default function MHeader({
  setUser,
  children,
  style = {},
  ...other
}: {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  style?: TextStyle;
}) {
  const styles = useStyles();
  const [name, setName] = useState("");

  const logOut = () => {
    setUser("");
  };

  return (
    <View style={{ ...styles.headerBox, ...style }} {...other}>
      <Text style={{ ...styles.headerTitre, ...style }} {...other}>
        {children}
      </Text>
      <TouchableOpacity onPress={logOut} style={{ ...styles.buttonCustom1 }}>
        <MaterialIcons
          name="logout"
          size={24}
          color="black"
          style={{ ...styles.buttonIcon }}
        />
      </TouchableOpacity>
    </View>
  );
}
