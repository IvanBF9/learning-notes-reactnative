import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function EditNote({ navigation }: { navigation: any }) {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <MTitle>Detail note user</MTitle>
      <Text
        onPress={() => {
          navigation.navigate("MyList");
        }}
      >
        Retour liste notes
      </Text>
    </View>
  );
}
