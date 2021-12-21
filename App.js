import React, { useState } from "react";
import {Platform,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

function dataHandler(transaction, results) {
    for (var i=0; i<results.rows.length; i++) {
        // Each row is a standard JavaScript array indexed by
        // column names.
        var row = results.rows.item(i);
        string = string + row['name'] + " (ID "+row['id']+")\n";
    }
    alert(string);
    setItems(results);
    console.log(JSON.stringify(results));
}

export default function App() {
    const [items, setItems] = React.useState(null);
 
    const db = SQLite.openDatabase("table.db");

    db.transaction((tx) => {
        tx.executeSql(
          `select * from text`,
          [],
          dataHandler
        );
    });
    console.log("pppp11");
    console.log(JSON.stringify(results);
    
    return (
        <Text>
            Hello
        </Text>
    );
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