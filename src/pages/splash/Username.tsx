import React, { useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { useStyles } from "../../utils/style";
import { MHeader, MText, MTitle, MInput } from "../../components/atoms";

export default function Ajout({
  navigation,
  setUser,
}: {
  navigation?: any;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [name, setName] = useState("");

  const SendUser = () => {
    if (name != "" && name.length > 2) {
      setUser(name);
    }
  };

  const styles = useStyles();
  return (
    <View style={{ justifyContent: "center", ...styles.container }}>
      <MInput placeholder="Nom d'utilisateur" onChangeText={setName}></MInput>
      <Button title="Connexion" onPress={SendUser}></Button>
    </View>
  );
}
