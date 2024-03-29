import React, {useState} from "react";
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';
import * as BaseLiturgy from '../../constants/liturgyBaseHTML';
import { useSelector } from 'react-redux';  //redux - make the state available throughout the app 
import {StyleSheet, View, Text, Alert, TouchableOpacity, useWindowDimensions, ScrollView, Button, TouchableHighlight} from "react-native"; 

const slideshowRowInterval = 4;

export const OfferingOfTheLambScreen = ({navigation}) => {
    const [textHtml, setHTML] = React.useState(null);
    const [isDbLoad, setDbLoad] = React.useState(false);
    const [prevPageStart, setPrevPageStartIndex] = React.useState(0);
    const [prevPageEnd, setPrevPageEndIndex] = React.useState(0);
    const [nextPageStart, setNextPageStartIndex] = React.useState(slideshowRowInterval);
    const [nextPageEnd, setNextPageEndIndex] = React.useState(slideshowRowInterval+4);
    const [databaseResult, setDatabaseResult] = React.useState(null);
    const { width } = useWindowDimensions();
    const dbFile = 'table.db';
  
    const english = useSelector( state => state.english);
    const armenian = useSelector( state => state.armenian);
    const translit = useSelector( state => state.translit);
    const scroll = useSelector( state => state.scroll);
    const slide = useSelector( state => state.slide); 


    const loadDB = async () => {
      if(!isDbLoad){
        try {
          if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
            await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
          };
  
          await FileSystem.downloadAsync(Asset.fromModule(require('../../asset/table.db')).uri, FileSystem.documentDirectory + `SQLite/${dbFile}`).
            then(() => {
              const db = SQLite.openDatabase(dbFile);
              setDbLoad(true);
              var queryString = null;
              if(armenian.isArmenian){
                if(queryString == null){
                  queryString = 'Ar'
                }
              }
              if(translit.isTranslit){
                if(queryString == null){
                  queryString = 'Tr'
                }
                if(queryString != null){
                  queryString += ', Tr'
                }
              }
              if(english.isEnglish){
                if(queryString == null){
                  queryString = 'En'
                }
                if(queryString != null){
                  queryString += ', En'
                }
              }
              db.transaction((tx) => {
                tx.executeSql(
                  `select ${queryString} from text`,
                  [], 
                  (_, result) => {
                    let i;
                    let rowStrings = BaseLiturgy.liturgyHTML;
                    let rowObject;
  
                    setDatabaseResult(result.rows._array)
                    
                    if(scroll.isScroll){
                      for(i=0; i < result.rows._array.length; i++){
                        rowObject = result.rows._array[i];
                        if(armenian.isArmenian){
                          rowStrings += `<tr> <td align="left">`;
                          rowStrings += rowObject['Ar'];
                        }
                        if(translit.isTranslit && armenian.isArmenian){
                          rowStrings += `</td> <td align="left">`;
                          rowStrings += rowObject['Tr'];
                        }else if(translit.isTranslit && !armenian.isArmenian){
                          rowStrings += `<tr> <td align="left">`;
                          rowStrings += rowObject['Tr'];
                        }
                        if((translit.isTranslit || armenian.isArmenian) && english.isEnglish){
                          rowStrings += `</td> <td align="left">`;
                          rowStrings += rowObject['En'];
                        }else if(english.isEnglish && !translit.isTranslit && !armenian.isArmenian){
                          rowStrings += `<tr> <td align="left">`;
                          rowStrings += rowObject['En'];
                        }
                        rowStrings += `</td> </tr>`;
                      }
                      rowStrings += `</table> <br/><br/> </body>`;
                      liturgy = rowStrings;
                      setHTML(liturgy);
                    }
                    if(slide.isSlide){
                      for(i=prevPageEnd; i < nextPageStart; i++){
                        rowObject = result.rows._array[i];
                        if(armenian.isArmenian){
                          rowStrings += `<tr> <td align="left">`;
                          rowStrings += rowObject['Ar'];
                        }
                        if(translit.isTranslit && armenian.isArmenian){
                          rowStrings += `</td> <td align="left">`;
                          rowStrings += rowObject['Tr'];
                        }else if(translit.isTranslit && !armenian.isArmenian){
                          rowStrings += `<tr> <td align="left">`;
                          rowStrings += rowObject['Tr'];
                        }
                        if((translit.isTranslit || armenian.isArmenian) && english.isEnglish){
                          rowStrings += `</td> <td align="left">`;
                          rowStrings += rowObject['En'];
                        }else if(english.isEnglish && (!translit.isTranslit && !armenian.isArmenian)){
                          rowStrings += `<tr> <td align="left">`;
                          rowStrings += rowObject['En'];
                        }
                        rowStrings += `</td> </tr>`;
                      }
                      rowStrings += `</table> <br/><br/> </body>`;
                      liturgy = rowStrings;
                      setHTML(liturgy);
                    }
                    
                  }, 
                  (_, err) => {
                      console.log("error");
                      alert(err.message);
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
  
    const loadPrevPage = () => {
      let i;
      let rowStrings = BaseLiturgy.liturgyHTML;
      let rowObject;
      
      for(i=prevPageStart; i < prevPageEnd; i++){
        rowObject = databaseResult[i];
        if(armenian.isArmenian){
          rowStrings += `<tr> <td align="left">`;
          rowStrings += rowObject['Ar'];
        }
        if(translit.isTranslit && armenian.isArmenian){
          rowStrings += `</td> <td align="left">`;
          rowStrings += rowObject['Tr'];
        }else if(translit.isTranslit && !armenian.isArmenian){
          rowStrings += `<tr> <td align="left">`;
          rowStrings += rowObject['Tr'];
        }
        if((translit.isTranslit || armenian.isArmenian) && english.isEnglish){
          rowStrings += `</td> <td align="left">`;
          rowStrings += rowObject['En'];
        }else if(english.isEnglish && (!translit.isTranslit && !armenian.isArmenian)){
          rowStrings += `<tr> <td align="left">`;
          rowStrings += rowObject['En'];
        }
        rowStrings += `</td> </tr>`;
      }
      rowStrings += `</table> <br/><br/> </body>`;
      liturgy = rowStrings;
      setHTML(liturgy);
      setPrevPageStartIndex(prevPageStart-slideshowRowInterval);
      setPrevPageEndIndex(prevPageEnd-slideshowRowInterval);
      setNextPageStartIndex(nextPageStart-slideshowRowInterval);
      setNextPageEndIndex(nextPageEnd-slideshowRowInterval);
    }
  
    const loadNextPage = () => {
      let i;
      let rowStrings = BaseLiturgy.liturgyHTML;
      let rowObject;
      
      for(i=nextPageStart; i < nextPageEnd; i++){
        rowObject = databaseResult[i];
        if(armenian.isArmenian){
          rowStrings += `<tr> <td align="left">`;
          rowStrings += rowObject['Ar'];
        }
        if(translit.isTranslit && armenian.isArmenian){
          rowStrings += `</td> <td align="left">`;
          rowStrings += rowObject['Tr'];
        }else if(translit.isTranslit && !armenian.isArmenian){
          rowStrings += `<tr> <td align="left">`;
          rowStrings += rowObject['Tr'];
        }
        if((translit.isTranslit || armenian.isArmenian) && english.isEnglish){
          rowStrings += `</td> <td align="left">`;
          rowStrings += rowObject['En'];
        }else if(english.isEnglish && (!translit.isTranslit && !armenian.isArmenian)){
          rowStrings += `<tr> <td align="left">`;
          rowStrings += rowObject['En'];
        }
        rowStrings += `</td> </tr>`;
      }
      rowStrings += `</table> <br/><br/> </body>`;
      liturgy = rowStrings;
      setHTML(liturgy);
      setPrevPageStartIndex(nextPageStart-slideshowRowInterval);
      setPrevPageEndIndex(nextPageStart);
      setNextPageStartIndex(nextPageStart+slideshowRowInterval);
      setNextPageEndIndex(nextPageEnd+slideshowRowInterval);
    }
  
    loadDB();
  
    if(scroll.isScroll){
      if(textHtml == null){
        return(
          <View style={stylesOfferingOfTheLamb.container}>
            <Text>Liturgy</Text>
            <Text>Loading</Text>
          </View>
        )
      }else{
        return(
          <View style={stylesOfferingOfTheLamb.container}>
            <ScrollView>
              <HTML source={{html: textHtml}} contentWidth={width} />
            </ScrollView>
          </View>
        );
      }
    }else if(slide.isSlide){
      return (
        <View style={stylesOfferingOfTheLamb.container}>
          <TouchableOpacity style={stylesOfferingOfTheLamb.prevButtonStyle} onPress={loadPrevPage}/>
          <TouchableOpacity style={stylesOfferingOfTheLamb.nextButtonStyle} onPress={loadNextPage}/>
          <HTML source={{html: textHtml}} contentWidth={width} />
        </View>
      );
    }
  };
  

  

  
  const stylesOfferingOfTheLamb = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
    },

    prevButtonStyle: {
      zIndex: 2,
      position: "absolute",
      top: 0,
      bottom: 0,
      alignSelf: "flex-start",
      width: "25%"
    },

    nextButtonStyle: {
      zIndex: 2,
      position: "absolute",
      top: 0,
      bottom: 0,
      alignSelf: "flex-end",
      width: "25%"
    }
  })