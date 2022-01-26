import React from "react";
import {StyleSheet, StatusBar, View, Text} from "react-native";

export function FoundationReleaseScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.mainHeading}>Foundation Release </Text>
                <Text style={[styles.baseText, styles.italic]}>Date {"\n"} {"\n"}</Text>

                <Text style={styles.baseText}>Content</Text>
                <Text style={styles.baseText}>- Liturgy</Text>
                <Text style={styles.baseText}>- Upcoming features page {"\n"} {"\n"} </Text>

                <Text style={styles.baseText}>Settings</Text>
                <Text style={styles.baseText}>- Scroll</Text>
                <Text style={styles.baseText}>- Slideshow</Text>
                <Text style={styles.baseText}>- Language selection (ԸԱ, AM, EN) {"\n"} {"\n"} </Text>

                <Text style={styles.baseText}>Features</Text>
                <Text style={styles.baseText}>- Portrait </Text>
                <Text style={styles.baseText}>- Landscape</Text>

            </View>
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