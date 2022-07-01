import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { SearchBar } from './molecules';
import { StyleSheet } from "react-native";
import colors from "../utils/colors";
import {useStyles} from "../utils/style";

export default function Filters({displayedAuthors, displayedTags, setFilterTag, setFilterAuthor, setSearchval, filterTag, filterAuthor, applyFilters}: {
    displayedAuthors:string[]; displayedTags:string[]; 
    setFilterTag:React.Dispatch<React.SetStateAction<string>>; setFilterAuthor:React.Dispatch<React.SetStateAction<string>>;
    setSearchval:React.Dispatch<React.SetStateAction<string>>;filterTag: string; filterAuthor: string;applyFilters: ()=>void;
}) {

    const styles = useStyles();

    const selectAuthor = (value:string) => {
        if (value == filterAuthor) return setFilterAuthor('');
        return setFilterAuthor(value);
    }

    const selectTag = (value:string) => {
        if (value == filterTag) return setFilterTag('');
        return setFilterTag(value);
    }
    

    return (
        <View>
            <SearchBar onChangeText={setSearchval} style={styles.searchBar}/>
            <View>
                <Text>Tags</Text>
                <View style={style.itemsct}>
                    {
                        displayedTags.map(tag => {
                            if (tag != filterTag){
                                return (
                                    <TouchableOpacity style={style.choice} onPress={() => {selectTag(tag)}}>
                                        <Text>{tag}</Text>
                                    </TouchableOpacity>
                                )
                            }
                            return (
                                <TouchableOpacity style={style.activechoice} onPress={() => {selectAuthor(tag)}}><Text>{tag}</Text></TouchableOpacity>

                            );
                        })
                    }
                </View>
            </View>
            <View>
            <Text>Auteurs</Text>
                <View style={style.itemsct}>
                    {
                        displayedAuthors.map(auteur => {
                            if (auteur != filterAuthor){
                                return (
                                    <TouchableOpacity style={style.choice} onPress={() => {setFilterAuthor(auteur)}}>
                                        <Text>{auteur}</Text>
                                    </TouchableOpacity>
                                )
                            }
                            return (
                                <TouchableOpacity style={style.activechoice} onPress={() => {setFilterAuthor(auteur)}}><Text>{auteur}</Text></TouchableOpacity>

                            );
                        })
                    }
                </View>
            </View>
            <TouchableOpacity style={{padding:8}} onPress={() => {applyFilters()}}><Text>Appliquer les filtres</Text></TouchableOpacity>
        </View>
    );
}



const style = StyleSheet.create({
    itemsct:{
        overflow: 'hidden',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxHeight: 56
    },
    choice: {
        margin: 4,
        backgroundColor: 'blue',
    },
    activechoice:{
        backgroundColor: 'red'
    }
});

