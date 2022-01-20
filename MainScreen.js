import React from "react";
import {StyleSheet, StatusBar, View, Text} from "react-native";

export function MainScreen({navigation}) {
    return (
        <View style={styles.screen}>
        
        </View>
    );
}

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#ecf0f1',
        alignItems: "center"
    },
    mainHeading: {
        fontSize: 30,
    },
    baseText: {
        fontSize: 20
    }, 
    italic: {
        fontStyle: "italic"
    }
});