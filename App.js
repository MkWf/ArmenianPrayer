import React, { useState } from "react";
import {Platform,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View, useWindowDimensions} from "react-native";
import Constants from "expo-constants";
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';
import * as BaseLiturgy from './constants/liturgyBaseHTML';

export default function App() {
    const [textHtml, setHTML] = React.useState('');
    const [isDbLoad, setDbLoad] = React.useState(false);
    const { width } = useWindowDimensions();
    const dbFile = 'table.db';

    const loadDB = async () => {
      if(!isDbLoad){
        try {
          if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
            await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
          };
  
          await FileSystem.downloadAsync(Asset.fromModule(require('./asset/table.db')).uri, FileSystem.documentDirectory + `SQLite/${dbFile}`).
            then(() => {
              const db = SQLite.openDatabase(dbFile);
              setDbLoad(true);
              db.transaction((tx) => {
                tx.executeSql(
                  `select * from text`,
                  [], 
                  (_, result) => {
                    let i;
                    let rowStrings = BaseLiturgy.liturgyHTML;
                    let rowObject;
                    
                    for(i=0; i < result.rows._array.length; i++){
                      rowObject = result.rows._array[i];
                      rowStrings += `<tr> <td align="left">`;
                      rowStrings += rowObject['Ar'];
                      rowStrings += `</td> <td align="left">`;
                      rowStrings += rowObject['Tr'];
                      rowStrings += `</td> <td align="left">`;
                      rowStrings += rowObject['En'];
                      rowStrings += `</td> </tr>`;
                    }
                    rowStrings += `</table> <br/><br/> </body>`;
                    liturgy = rowStrings;
                    setHTML(liturgy);
                  }, 
                  (_, err) => {
                      console.log("error");
                      alert("out");
                  });
                });
              }); 
          } catch (error) {
            alert("FAIL");
            console.log("fail");
            throw new Error(error);
          }
      }
    }
  
    loadDB();
  
    return (
      <ScrollView style={styles.container}>
        <Text> 123</Text>
        <HTML source={{html: textHtml}} contentWidth={width} />
      </ScrollView>
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



