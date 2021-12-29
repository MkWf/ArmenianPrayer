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
    const { width } = useWindowDimensions();
    const FOO = 'table.db';

    let html = `
<html>
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
            <tr><td align="left">Պատարագ Հայաստանեայց Եկեղեցւոյ</td><td align="left">Badarak Hayasdanyayts Yegeghetsvo</td><td align="left">The Divine Liturgy of the Armenian Church</td></tr></table><br/><br/></body></html>
`;

    /*<tr>
        <td align="left">
            Պատարագ Հայաստանեայց Եկեղեցւոյ
        </td>
        <td align="left">
            Badarak Hayasdanyayts Yegeghetsvo
        </td>
        <td align="left">
            The Divine Liturgy of the Armenian Church
        </td>
    </tr>*/

    const loadDB = async () => {
      try {
        if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
          await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
        };

        await FileSystem.downloadAsync(Asset.fromModule(require('./asset/table.db')).uri, FileSystem.documentDirectory + `SQLite/${FOO}`).
          then(() => {
            const db = SQLite.openDatabase(FOO);
            db.transaction((tx) => {
              tx.executeSql(
                `select * from text`,
                [], 
                (_, result) => {
                  let i = 0;
                  let rowString = null;
                  let rowObject;
                  rowString = result.rows._array[0];
                  //html += '<tr><td align="left">Պատարագ Հայաստանեայց Եկեղեցւոյ</td><td align="left">Badarak Hayasdanyayts Yegeghetsvo</td><td align="left">The Divine Liturgy of the Armenian Church</td></tr>'
                  //html += rowString['Ar'];
                  //html += '<tr><td align="left">Պատարագ Հայաստանեայց Եկեղեցւոյ</td><td align="left">Badarak Hayasdanyayts Yegeghetsvo</td><td align="left">The Divine Liturgy of the Armenian Church</td></tr></table><br/><br/></body></html>'
                  //alert(html);
                  /*for(i=1; 10; i++){
                    rowString = '<tr><td align="left">';
                    //alert(rowString);
                    rowObject = result.rows._array[6];
                    alert(rowObject[1]);
                    rowString += rowObject['Ar'];
                    rowString += '</td><td align="left"';
                    rowString += rowObject['Tr'];
                    rowString += '</td><td align="left"';
                    rowString += rowObject['En'];
                    rowString += '</td></tr>';
                  }*/
                }, 
                (_, err) => {
                    console.log("error");
                }).then(() => {
                  return (
                    <ScrollView style={styles.container}>
                      <HTML source={{html}} contentWidth={width} />
                    </ScrollView>
                  );
                });
              });
            }); 
        } catch (error) {
          alert("FAIL");
          console.log("fail");
          throw new Error(error);
        }
    }

    loadDB();

    return (
      <ScrollView style={styles.container}>
        <HTML source={{html}} contentWidth={width} />
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



