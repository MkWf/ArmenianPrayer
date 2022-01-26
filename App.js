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

export default function MainScreenHolder({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Armenian Prayer"  //name beside drawer icon on toolbar 
          component={MainScreen}  //the screen to be displayed 
        />
      </Drawer.Navigator>
      <Stack.Navigator>
          <Stack.Screen name="Armenian Prayer" component={MainScreen } />  
          <Stack.Screen name="Divine Liturgy Screen" component={DivineLiturgyScreen} />  
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export const MainScreen = ({navigation}) => {
  return (
    <View style={stylesMainScreen.container}>
        <Card style={stylesMainScreen.cardMain}> 
            <Card.Content>
                <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to the Armenian Prayer App {"\n"}</Text>
                <Text>There's just liturgy for now but more will be coming soon!{"\n"}</Text>
                <Text style={{color:"#FFA500"}} onPress={() => Alert.alert("Pushed")}>Read about upcoming features ></Text>
            </Card.Content>
        </Card>

        <Card style={stylesMainScreen.cardSecond} onPress={() => navigation.navigate('DivineLiturgyScreen')}>
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

export function DivineLiturgyScreen({navigation}) {
  return (
    <View style={stylesMainScreen.container}>
        <Card style={stylesMainScreen.cardMain}> 
            <Card.Content>
                <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to the Armenian Prayer App {"\n"}</Text>
                <Text>There's just liturgy for now but more will be coming soon!{"\n"}</Text>
                <Text style={{color:"#FFA500"}} onPress={() => Alert.alert("Pushed")}>Read about upcoming features ></Text>
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
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
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
