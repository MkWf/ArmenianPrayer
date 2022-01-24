import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet, StatusBar, View, Text, SafeAreaView, Image, Alert, TouchableOpacity} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from './FirstPage';
import CustomSidebarMenu from './CustomSidebarMenu';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

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

export function MainScreen({navigation}) {
    
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen
                name="FirstPage"
                options={{
                    drawerLabel: 'First page Option',
                groupName: 'Display Languages',
                activeTintColor: '#e91e63',
          }}
          component={firstScreenStack}
        />
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f5f5dd',
      justifyContent: "space-evenly"
    },
    cardMain: {
        padding: 0, 
        margin: 0,
        elevation: 4,
        width: '85%',
        alignItems: "center",
        justifyContent: "center"
    },
    cardSecond: {
        elevation: 4,
        width: '85%'
    },
    cardImage: {
        width: '100%',
        height: 100
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 24
    },
    cardSubtext: {
        fontSize: 16,
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
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