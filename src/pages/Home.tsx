import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useStyles } from "../utils/style";
import { MText, MTitle, MHeader } from "../components/atoms";
import { INote } from "../utils/interfaces";
import { getNotes } from "../utils/api";
import { Card } from "../components/molecules";

export default function Home({ navigation }: { navigation: any }) {
  const styles = useStyles();
  const [notes, setNotes] = useState([] as INote[]);

  useEffect(() => {
    getNotes().then((res: any) => setNotes(res));
  }, []);

  console.log(notes);

  return (
    <View style={styles.container}>
      {notes.map((item, index) => {
        return <Card title={item.title} children={undefined} />;
      })}
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
