import 'react-native-gesture-handler';

import React, { useState } from "react";
import {Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View,useWindowDimensions, StatusBar, Image} from "react-native";
import Constants from "expo-constants";
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';
import * as BaseLiturgy from './constants/liturgyBaseHTML';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as MainScreen from './MainScreen';
import CustomSidebarMenu from './CustomSidebarMenu.js';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
    const [textHtml, setHTML] = React.useState('');
    const [isDbLoad, setDbLoad] = React.useState(false);
    const { width } = useWindowDimensions();
    const dbFile = 'table.db';

    return(
    <NavigationContainer>
      <Drawer.Navigator
        // For setting Custom Sidebar Menu
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        
        <Drawer.Screen
          name="FirstPage"
          options={{
            drawerLabel: 'First page Option',
            // Section/Group Name
            groupName: 'Display Languages',
            activeTintColor: '#e91e63',
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerLabel: 'Second page Option',
            // Section/Group Name
            groupName: 'Display Languages',
            activeTintColor: '#e91e63',
          }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

   /* return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Armenian Prayer">
          <Stack.Screen name="Armenian Prayer" component={MainScreen.MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}*/

const stylesHomeScreen = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#ecf0f1'
  }
});


function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}


