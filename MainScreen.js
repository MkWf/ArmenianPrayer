import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet, StatusBar, View, Text, SafeAreaView, Image, Alert, TouchableOpacity} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomSidebarMenu from './CustomSidebarMenu';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Image
            source={{
              uri:
                'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png',
            }}
            style={{ width: 0, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

export function MainScreenHolder({navigation}) {
    
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen
                name="Armenian Prayer"  //name beside drawer icon on toolbar 
                options={{
                    drawerLabel: 'First page Option',
                groupName: 'Display Languages',
                activeTintColor: '#e91e63',
            }}
          component={firstScreenStack}  //the screen to be displayed 
        />
      </Drawer.Navigator>
    );
}

function firstScreenStack({ navigation }) {
    return (
      <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'First Page1', //Set Header Title
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

const MainScreen = () => {
  return (
    <View style={stylesMainScreen.container}>
        <Card style={stylesMainScreen.cardMain}> 
            <Card.Content>
                <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to the Armenian Prayer App {"\n"}</Text>
                <Text>There's just liturgy for now but more will be coming soon!{"\n"}</Text>
                <Text style={{color:"#FFA500"}} onPress={() => Alert.alert("Pushed")}>Read about upcoming features ></Text>
            </Card.Content>
        </Card>

        <Card style={stylesMainScreen.cardSecond}> 
            <Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Text>{"\n"}Time to Pray!{"\n"}</Text>
                <Text style={{fontWeight:"bold", fontSize:20}}>The Divine Liturgy {"\n"}</Text>
                <Paragraph>We pray the liturgy every Sunday to celebrate new life in Jesus</Paragraph>
            </Card.Content>
        </Card>
    </View> 
  );
};

const stylesMainScreen = StyleSheet.create({
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