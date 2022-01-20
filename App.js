import React, { useState } from "react";
import {Platform,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View, useWindowDimensions, StatusBar} from "react-native";
import Constants from "expo-constants";
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';
import * as BaseLiturgy from './constants/liturgyBaseHTML';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [textHtml, setHTML] = React.useState('');
    const [isDbLoad, setDbLoad] = React.useState(false);
    const { width } = useWindowDimensions();
    const dbFile = 'table.db';

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Armenian Prayer">
          <Stack.Screen name="Armenian Prayer" component={MainScreen.MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const stylesHomeScreen = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#ecf0f1'
  }
});





