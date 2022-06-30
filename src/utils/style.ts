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
    },
    py20: {
      paddingVertical: 20,
    },
    pb20: {
      paddingBottom: 20,
    },
    headerBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      width: "100%",
      padding: 20,
    },
    pageTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
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
    cardUser: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
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
    texteBtn: {
      textAlign: "center",
      fontSize: 18,
      color: colors.background,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    input: {
      padding: 5,
      marginVertical: 5,
      color: colors.background,
      fontSize: 25,
      backgroundColor: colors.secondary,
      borderRadius: 4,
    },
    buttonCustom1: {
      padding: 5,
      backgroundColor: colors.text,
      borderRadius: 4,
    },
    buttonCustom2: {
      padding: 5,
      backgroundColor: colors.background,
      borderRadius: 4,
    },
    buttonBack: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    buttonCenter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    },
    buttonIcon: {
      textAlign: "center",
    },
    author: {
      textAlign: "right",
      color: colors.text,
      fontStyle: "italic",
    },
    searchBar: {
      paddingVertical: 5,
      paddingHorizontal: 20,
    },
    containerBtn: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  });
};
