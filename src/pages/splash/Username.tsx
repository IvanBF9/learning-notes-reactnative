import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
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
      <View style={styles.py20}>
        <MInput placeholder="Nom d'utilisateur" onChangeText={setName}></MInput>
      </View>
      <View style={styles.buttonCenter}>
        <TouchableOpacity
          onPress={SendUser}
          style={{ ...styles.buttonCustom1 }}
        >
          <MText style={styles.texteBtn}>Connexion</MText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
