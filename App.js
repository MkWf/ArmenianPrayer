import React, { useState } from "react";
import {Platform,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";


export default function App() {
    const [items, setItems] = React.useState(null);
 
    const db = SQLite.openDatabase("table.db");

    db.transaction((tx) => {
        tx.executeSql(
          `select * from text`,
          [],
          (_, result) => {
            alert(result);
          },
          (_, err) => {
              alert(err.message);
          }
        );
    });

    console.log("xxxxx");
    return (
        <Text>Hello</Text>
    )
    
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});