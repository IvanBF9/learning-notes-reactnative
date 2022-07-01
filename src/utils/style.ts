import { StyleSheet } from "react-native";
import colors from "./colors";

export const useStyles = () => {
  return StyleSheet.create({
    author: {
      textAlign: "right",
      color: colors.text,
      fontStyle: "italic",
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
    buttonSearch: {
      marginHorizontal: 20,
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
    buttonIcon: {
      textAlign: "center",
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
    choice: {
      borderRadius: 4,
      margin: 4,
      padding: 4,
      backgroundColor: colors.background,
    },
    choiceActive: {
      borderRadius: 4,
      margin: 4,
      padding: 4,
      backgroundColor: colors.text,
    },
    container: {
      padding: 20,
      backgroundColor: colors.primary,
      height: "100%",
    },
    containerBtn: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
    containerFilters: {
      backgroundColor: colors.primary,
      paddingTop: 0,
      marginTop: 0,
    },
    containerItems: {
      overflow: "hidden",
      flexDirection: "row",
      flexWrap: "wrap",
      maxHeight: 65,
    },
    containerSearchFilters: {
      borderBottomWidth: 1,
      paddingVertical: 20,
    },
    filtersContent: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    global: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 20,
    },
    headerBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      width: "100%",
      padding: 20,
    },
    headerTitre: {
      fontWeight: "bold",
      fontSize: 24,
      color: colors.text,
    },
    input: {
      padding: 5,
      marginVertical: 5,
      color: colors.background,
      fontSize: 25,
      backgroundColor: colors.secondary,
      borderRadius: 4,
    },
    pageTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    pb20: {
      paddingBottom: 20,
    },
    py20: {
      paddingVertical: 20,
    },
    searchBar: {
      paddingVertical: 5,
      paddingHorizontal: 20,
    },
    searchInput: {
      padding: 5,
      marginHorizontal: 20,
      marginBottom: 10,
      color: colors.background,
      fontSize: 20,
      backgroundColor: colors.text,
      borderRadius: 4,
      borderWidth: 1,
    },
    scrollContainer: {
      paddingHorizontal: 20,
      backgroundColor: colors.primary,
    },
    texte: {
      fontSize: 18,
      color: colors.text,
    },
    texteTag: {
      color: colors.text,
    },
    texteBtn: {
      textAlign: "center",
      fontSize: 18,
      color: colors.background,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    titre: {
      fontSize: 22,
      color: colors.text,
    },
    titleMd: {
      fontSize: 18,
      color: colors.text,
    },
  });
};
