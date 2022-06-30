import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Pages
import UserPage from "./src/pages/splash/Username";
// Utils
import { getNotes } from "./src/utils/api";
import { INote } from "./src/utils/interfaces";
import { useStyles } from "./src/utils/style";
import { MHeader } from "./src/components/atoms";
import { getName, setName } from "./src/utils/storage";
import { LoginContext, NotesContext } from './src/utils/contexts';
import { TabNavigation } from "./src/routes";

export default function App() {
  const [AllNotes, setAllNotes] = useState([] as INote[]);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user != "") {
      setName(user);
    }
  }, [user]);

  useEffect(() => {
    getName().then((usr: any) => {
      if (usr) setUser(usr);
    });
    getNotes().then((res: any) => setAllNotes(res));
  }, []);

  const styles = useStyles();

  return (
    <LoginContext.Provider value={{user, setUser}}>
      <NotesContext.Provider value={{AllNotes, setAllNotes}}>
        <NavigationContainer>
          {user != "" ? (
            <SafeAreaView style={styles.global}>
              <MHeader setUser={setUser}>{user}</MHeader>
              <TabNavigation />
            </SafeAreaView>
          ) : (
            <UserPage setUser={setUser} />
          )}
        </NavigationContainer>
      </NotesContext.Provider>
    </LoginContext.Provider>
  );
}
