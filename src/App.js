import 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux';  //redux - make the state available throughout the app 
import { PersistGate } from 'redux-persist/integration/react'; //redux - in charge of reloading the data when the application is reopened.
import React, {useReducer, useState} from "react";  //OfferingOfTheLamb
import Svg, { Path } from "react-native-svg" //DivineLiturgyScreen 
import Constants from "expo-constants"; //OfferingOfTheLamb
import {StyleSheet, View, Text, Alert, TouchableOpacity, useWindowDimensions, ScrollView, Button} from "react-native"; //OfferingOfTheLamb-useWindowDimensions,ScrollView
import { Card, Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer'; //MainScreenNavigator
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { store, persistor } from './redux/store/store'
import {MainScreenNavigator} from './components/main/MainScreen'
import {DivineLiturgyScreen} from './components/divine_liturgy/DivineLiturgyScreen'
import {OfferingOfTheLambScreen} from './components/offering_of_the_lamb/OfferingOfTheLambScreen'

//OfferingOfTheLamb
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';

const Drawer = createDrawerNavigator();  //MainScreenNavigator
const Stack = createNativeStackNavigator();  //App
const slideshowRowInterval = 4;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Main" component={MainScreenNavigator} options={{headerShown: false}}/>  
              <Stack.Screen name="Divine Liturgy" component={DivineLiturgyScreen}/>
              <Stack.Screen name="Liturgy" component={OfferingOfTheLambScreen}/>  
            </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
