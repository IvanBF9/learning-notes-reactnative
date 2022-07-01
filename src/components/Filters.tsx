import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SearchBar } from "./molecules";
import { StyleSheet } from "react-native";
import colors from "../utils/colors";
import { useStyles } from "../utils/style";
import { MText } from "./atoms";
import { FontAwesome } from "@expo/vector-icons";

export default function Filters({
  displayedAuthors,
  displayedTags,
  setFilterTag,
  setFilterAuthor,
  setSearchval,
  filterTag,
  filterAuthor,
  applyFilters,
}: {
  displayedAuthors: string[];
  displayedTags: string[];
  setFilterTag: React.Dispatch<React.SetStateAction<string>>;
  setFilterAuthor: React.Dispatch<React.SetStateAction<string>>;
  setSearchval: React.Dispatch<React.SetStateAction<string>>;
  filterTag: string;
  filterAuthor: string;
  applyFilters: () => void;
}) {
  const styles = useStyles();

  const selectAuthor = (value: string) => {
    if (value == filterAuthor) return setFilterAuthor("");
    return setFilterAuthor(value);
  };

  const selectTag = (value: string) => {
    if (value == filterTag) return setFilterTag("");
    return setFilterTag(value);
  };

  const [isOpenFilterBox, setIsOpenFilterBox] = useState(false);

  const toggleFilters = () => {
    if (isOpenFilterBox) {
      setIsOpenFilterBox(false);
    } else {
      setIsOpenFilterBox(true);
    }
  };

  return (
    <View style={styles.containerSearchFilters}>
      {isOpenFilterBox ? (
        <View>
          <SearchBar onChangeText={setSearchval} style={styles.searchBar} />
          <View style={styles.filtersContent}>
            <Text style={styles.titleMd}>Tags</Text>
            <View style={styles.containerItems}>
              {displayedTags.map((tag) => {
                if (tag != filterTag) {
                  return (
                    <TouchableOpacity
                      style={styles.choice}
                      onPress={() => {
                        selectTag(tag);
                      }}
                    >
                      <Text style={styles.texteTag}>{tag}</Text>
                    </TouchableOpacity>
                  );
                }
                return (
                  <TouchableOpacity
                    style={styles.choiceActive}
                    onPress={() => {
                      selectAuthor(tag);
                    }}
                  >
                    <Text>{tag}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.filtersContent}>
            <Text style={styles.titleMd}>Auteurs</Text>
            <View style={styles.containerItems}>
              {displayedAuthors.map((auteur) => {
                if (auteur != filterAuthor) {
                  return (
                    <TouchableOpacity
                      style={styles.choice}
                      onPress={() => {
                        setFilterAuthor(auteur);
                      }}
                    >
                      <Text style={styles.texteTag}>{auteur}</Text>
                    </TouchableOpacity>
                  );
                }
                return (
                  <TouchableOpacity
                    style={styles.choiceActive}
                    onPress={() => {
                      setFilterAuthor(auteur);
                    }}
                  >
                    <Text>{auteur}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View
            style={{
              ...styles.buttonCenter,
              marginVertical: 10,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                applyFilters;
              }}
              style={{ ...styles.buttonCustom1 }}
            >
              <MText style={styles.texteBtn}>Appliquer les filtres</MText>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      <View
        style={{
          ...styles.buttonSearch,
        }}
      >
        <TouchableOpacity
          onPress={toggleFilters}
          style={{ ...styles.buttonCustom1 }}
        >
          <MText style={styles.texteBtn}>
            <FontAwesome
              name={isOpenFilterBox ? "search-minus" : "search-plus"}
              size={24}
              color="black"
            />
          </MText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
