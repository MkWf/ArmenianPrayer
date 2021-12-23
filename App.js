import React, { useState } from "react";
import {Platform,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View} from "react-native";
import Constants from "expo-constants";
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';


export default function App() {
    const [items, setItems] = React.useState(null);

    load();

    /*const db = SQLite.openDatabase('table.db');
    db.transaction((tx) => {
        tx.executeSql(
          `select * from Text`,
          [],
          (_, result) => {
            alert(result);
          },
          (_, err) => {
              alert(err.message);
          }
        );
    });*/

    // Check if the directory where we are going to put the database exists
    async function load(){
      let dirInfo;
      try {
        console.log("check");
        dirInfo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite`);
      } catch(err) { alert(err.message) };

      if (!dirInfo.exists) {
        alert("entering try");
        try {
          await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
        } catch(err) { Sentry.captureException(err) }
      };

      // Downloads the db from the original file
      // The db gets loaded as read only
      alert("opening");
      FileSystem.downloadAsync(
        Asset.fromModule(require('./databases/table.db')).uri,
          `${FileSystem.documentDirectory}SQLite/table.db`
        ).then(() => {
        programsDB = SQLite.openDatabase(`table.db`); // We open our downloaded db
        //loadDB(loaded); // We load the db into the persist store
      }).then(() => {
        alert("database opened");
        console.log(programsDB);
        programsDB.transaction((tx) => {
          tx.executeSql(
            `select * from Text`,
            [],
            (_, result) => {
              alert(result.message);
            },
            (_, err) => {
              alert(err.message);
            }
          );
        })
      })
      .catch((err) => {
        Sentry.captureException(err);
        alert("caught exception")
      });
    }
  
    return (
        <Text>Hello</Text>
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