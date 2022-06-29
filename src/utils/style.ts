import { StyleSheet } from "react-native";
import colors from "./colors";

export const useStyles = () => {
  return StyleSheet.create({
    global: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 20,
    },
    container: {
      padding: 20,
      backgroundColor: colors.primary,
      height: "100%",
      //alignItems: "center",
      //justifyContent: "center",
    },
    headerBox: {
      borderBottomWidth: 1,
      width: "100%",
      padding: 20,
    },
    headerTitre: {
      fontWeight: "bold",
      fontSize: 24,
      color: colors.text,
    },
    card: {
      backgroundColor: colors.secondary,
    },
    titre: {
      fontWeight: "bold",
      fontSize: 22,
    },
    texte: {
      fontWeight: "bold",
      fontSize: 18,
    },
    input: {
      marginVertical: 5,
      color: colors.text,
      fontSize: 25,
      backgroundColor: colors.secondary,
    },
  });
};

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texte: {
    color: "red",
    fontWeight: "bold",
  },
});

export default styles;*/
