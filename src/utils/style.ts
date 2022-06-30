import { StyleSheet } from "react-native";
import colors from "./colors";

export const useStyles = () => {
  return StyleSheet.create({
    global: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 20,
    },
    scrollContainer: {
      paddingHorizontal: 20,
      backgroundColor: colors.primary,
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
      backgroundColor: colors.background,
      marginVertical: 5,
      padding: 10,
      borderRadius: 4,
    },
    cardTitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: colors.text,
    },
    titre: {
      fontSize: 22,
      color: colors.text,
    },
    texte: {
      fontSize: 18,
      color: colors.text,
    },
    input: {
      padding: 5,
      marginVertical: 5,
      color: colors.text,
      fontSize: 25,
      backgroundColor: colors.secondary,
    },
    buttonCustom1: {
      padding: 5,
      backgroundColor: colors.text,
    },
    buttonCustom2: {
      padding: 5,
      backgroundColor: colors.background,
    },
    buttonIcon: {
      textAlign: "center",
    },
    author: {
      textAlign: "right",
      color: colors.text,
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
