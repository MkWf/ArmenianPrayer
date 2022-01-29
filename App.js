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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Armenian Prayer" component={MainScreenNavigator} options={{headerShown: false}} />  
          <Stack.Screen name="Divine Liturgy Screen" component={DivineLiturgyScreen} />  
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainScreenNavigator = ({navigation}) => {
  return(
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Armenian Prayer"  //name beside drawer icon on toolbar 
        component={MainScreen}  //the screen to be displayed 
        options={{
          headerStyle: {
            backgroundColor: '#f5f5dd', //Set Header color
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const MainScreen = ({navigation}) => {
  return (
    <View style={stylesMainScreen.container}>
        <Card style={stylesMainScreen.cardMain}> 
            <Card.Content>
                <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to the Armenian Prayer App {"\n"}</Text>
                <Text>There's just liturgy for now but more will be coming soon!{"\n"}</Text>
                <Text style={{color:"#FFA500"}} onPress={() => Alert.alert("Pushed")}>Read about upcoming features ></Text>
            </Card.Content>
        </Card>

        <Card style={stylesMainScreen.cardSecond} onPress={() => navigation.navigate("Divine Liturgy Screen")}>
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

const DivineLiturgyScreen = ({navigation}) => {
  return (
    <View style={stylesDivineLiturgyScreen.container}>
        <Card style={stylesDivineLiturgyScreen.headerContainer}> 
            <Card.Content>
                <Text style={stylesDivineLiturgyScreen.headerText}>Divine Liturgy</Text>
            </Card.Content>
        </Card>

        <View style={stylesDivineLiturgyScreen.listItemContainer}>  
          <Image style={stylesDivineLiturgyScreen.listItemIcon}
            source={require('./assets/offeringIcon.svg')} />
          
          <View style={stylesDivineLiturgyScreen.listItemTextContainer}>
            <Text style={stylesDivineLiturgyScreen.listItemTitle}>
              The Offering of the Lamb
            </Text>
            <Text style={stylesDivineLiturgyScreen.listItemSubtitle}>
              We offer the bread and wine and ourselves to God
            </Text>
          </View>
        </View>
        <View style={stylesDivineLiturgyScreen.listItemContainer}>  
          <Image style={stylesDivineLiturgyScreen.listItemIcon}
            source={require('./assets/wordIcon.svg')} />
          
          <View style={stylesDivineLiturgyScreen.listItemTextContainer}>
            <Text style={stylesDivineLiturgyScreen.listItemTitle}>
              The Liturgy of the Word
            </Text>
            <Text style={stylesDivineLiturgyScreen.listItemSubtitle}>
              We listen to the Word of God from the Bible and to a sermon
            </Text>
          </View>
        </View>
        <View style={stylesDivineLiturgyScreen.listItemContainer}>  
          
          <Image style={stylesDivineLiturgyScreen.listItemIcon}
            source={require('./assets/faithfulIcon.svg')} />
      
          <View style={stylesDivineLiturgyScreen.listItemTextContainer}>
            <Text style={stylesDivineLiturgyScreen.listItemTitle}>
              The Liturgy of the Faithful
            </Text>
            <Text style={stylesDivineLiturgyScreen.listItemSubtitle}>
              We receive the Body and Blood of Jesus
            </Text>
          </View>
        </View>
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

const stylesDivineLiturgyScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5dd',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  headerContainer: {
    width: '85%',
    alignItems: "center",
  },
  headerText: {
    fontWeight:"bold",
    fontSize:40
  },
  listItemContainer: { 
    paddingTop: 50,
    flexDirection: "row",
    paddingLeft: 30,
    marginBottom: 35
  },
  listItemIcon: {
    height: 80,
    width: 80,
  },
  listItemTextContainer: {
    flexDirection: "column",
    paddingLeft: 30,
    paddingTop: 4
  },
  listItemTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listItemSubtitle: {
    color: "gray",
    fontSize: 14,
    paddingRight: 100
  }
})

