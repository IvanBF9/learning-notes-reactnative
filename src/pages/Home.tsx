import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";

export default function Home({ navigation }: { navigation: any }) {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <MTitle>Home</MTitle>
      <Text
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        Go to detail
      </Text>
    </View>
  );
}
