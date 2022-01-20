import React from "react";
import {StyleSheet, StatusBar, View, Text} from "react-native";

export function FoundationReleaseScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <Text> 123 </Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#ecf0f1'
    }
});