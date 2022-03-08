import React, {useState, useCallback, useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';
import * as BaseLiturgy from '../../constants/liturgyBaseHTML';
import { useSelector } from 'react-redux';  //redux - make the state available throughout the app 
import {StyleSheet, View, Text, Alert, TouchableOpacity, useWindowDimensions, ScrollView, Button} from "react-native"; 

const slideshowRowInterval = 4;

export const OfferingOfTheLambScreen = ({navigation}) => {
    const [textHtml, setHTML] = React.useState('');
    const [isDbLoad, setDbLoad] = React.useState(false);
    const [appIsReady, setAppIsReady] = React.useState(false);
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

    useEffect(() => {
      async function prepare() {
        try {
          // Keep the splash screen visible while we fetch resources
          await SplashScreen.preventAutoHideAsync();
          // Pre-load fonts, make any API calls you need to do here
          await loadDB();

          // Artificially delay for two seconds to simulate a slow loading experience. Please remove this if you copy and paste the code!
          // await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    if (!appIsReady) {
      return null;
    }

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
  
    //loadDB();
  
    if(scroll.isScroll){
      return(
        <View style={stylesOfferingOfTheLamb.container} onLayout={onLayoutRootView}>>
          <ScrollView>
            <HTML source={{html: textHtml}} contentWidth={width} />
          </ScrollView>
        </View>
      );
    }else if(slide.isSlide){
      return (
        <View style={stylesOfferingOfTheLamb.container}>
          <View style={buttonStyle.container}>
            <Button color="orange" title="Prev" onPress={() => loadPrevPage()}/>
            <Button color="orange" title="Next" onPress={() => loadNextPage()} />
          </View>
          <HTML source={{html: textHtml}} contentWidth={width} />
        </View>
      );
    }
  };
  
  const buttonStyle = StyleSheet.create({
    container: {
      alignSelf: "flex-end"
    }
  })
  
  const stylesOfferingOfTheLamb = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
    }
  })