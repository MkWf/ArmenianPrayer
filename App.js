import React, { useState } from "react";
import {Platform,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View, useWindowDimensions} from "react-native";
import Constants from "expo-constants";
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';

export default function App() {
    const [items, setItems] = React.useState(null);
    const [textHtml, setHTML] = React.useState('');
    const [isDbLoad, setDbLoad] = React.useState(false);
    const { width } = useWindowDimensions();
    const dbFile = 'table.db';

    let liturgy = `
          <style type="text/css">
              table
              {
                  border-style: solid;
                  border-width: 1px;
                  border-color: black;
                  border-collapse: collapse;
              }
              
              table tr
              {
                  background-color: white;
              }
              
              table tr.header
              {
                  background-color: #DDDDDD;
              }
              
              table tr.title
              {
                  background-color: #EEEEEE;
              }
              
              table tr td
              {
                  padding: 0px 3px 0px 3px;
                  border-style: solid;
                  border-width: 1px;
                  border-color: #666666;
              }
              
              table tr td.null
              {
                  color: #999999;
                  text-align: center;
                  padding: 0px 3px 0px 3px;
                  border-style: solid;
                  border-width: 1px;
                  border-color: #666666;
              }
              
              table tr td.separator
              {
                  padding: 0px 3px 0px 3px;
                  border-style: solid;
                  border-width: 1px;
                  border-color: #666666;
                  background-color: #DDDDDD;
              }
              
              table tr td.rownum
              {
                  padding: 0px 3px 0px 3px;
                  border-style: solid;
                  border-width: 1px;
                  border-color: #666666;
                  background-color: #DDDDDD;
                  text-align: right;
              }
          </style>
          <body>
              <table>
                  <tr class="title">
                      <td colspan="3" align="center"></td>
                  </tr>
      `;

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
                    let rowStrings = liturgy;
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
                    rowString += `</table> <br/><br/> </body>`;
                    liturgy = rowString;
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



