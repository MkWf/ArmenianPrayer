import 'react-native-gesture-handler';
import { Provider, useSelector, useDispatch } from 'react-redux';  //redux - make the state available throughout the app 
import { PersistGate } from 'redux-persist/integration/react'; //redux - in charge of reloading the data when the application is reopened.
import React, {useReducer, useState} from "react";  //OfferingOfTheLamb
import Svg, { Path } from "react-native-svg" //DivineLiturgyScreen 
import Constants from "expo-constants"; //OfferingOfTheLamb
import {StyleSheet, StatusBar, View, Text, SafeAreaView, Image, Alert, TouchableOpacity, useWindowDimensions,ScrollView} from "react-native"; //OfferingOfTheLamb-useWindowDimensions,ScrollView
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer'; //MainScreenNavigator
import { NavigationContainer } from '@react-navigation/native'; //App
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //App
import CustomSidebarMenu from './CustomSidebarMenu'; //MainScreenNavigator
import { store, persistor } from './src/asset/store/store';
import { updateUsername, updateArmenian, updateTranslit, updateEnglish } from './src/asset/actions/users';

//OfferingOfTheLamb
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import HTML from 'react-native-render-html';
import * as BaseLiturgy from './constants/liturgyBaseHTML';

const Drawer = createDrawerNavigator();  //MainScreenNavigator
const Stack = createNativeStackNavigator();  //App

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Main" component={MainScreenNavigator} options={{headerShown: false}}/>  
              <Stack.Screen name="Divine Liturgy" component={DivineLiturgyScreen}/>
              <Stack.Screen name="Liturgy" component={OfferingOfTheLamb}/>  
            </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
  const dispatch = useDispatch();

  const user = useSelector( state => state.user );
  const [newUsername, setNewUsername] = useState('');

  const saveUsername = () => {
    // in case the username hasnt been updated
    if(user.username == 'false'){
      dispatch(updateUsername('true'));
    }else{
      dispatch(updateUsername('false'));
    }
}

  const languageArm = useSelector( state => state.languageArmenian);
  const languageTrans = useSelector( state => state.languageTranslit);
  const languageEng = useSelector( state => state.languageEnglish);

  const [isArmenianActive, setArmenian] = useState('true');
  const [isTranslitActive, setTranslit] = useState('true');
  const [isEnglishActive, setEnglish] = useState('true');

  const saveArmenianState = (isTrue) => {
    dispatch(updateArmenian(isTrue));
  }

  const saveTranslitState = (isTrue) => {
    dispatch(updateTranslit(isTrue));
  }

  const saveEnglishState = (isTrue) => {
    dispatch(updateEnglish(isTrue));
  }

  return (

    <View>
        <Text>Armenian: {user.username} </Text>
        <Button 
          style={{ height: 40, width: 160, backgroundColor: 'white', borderRadius: 8, marginTop: 10 }} 
          text='Save' 
          onPress={ () => saveUsername()}/>


    </View> 
  );
};

/*<View style={stylesMainScreen.container}>
        <Card style={stylesMainScreen.cardMain}> 
            <Card.Content>
                <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to the Armenian Prayer App {"\n"}</Text>
                <Text>There's just liturgy for now but more will be coming soon!{"\n"}</Text>
                <Text style={{color:"#FFA500"}} onPress={() => Alert.alert("Pushed")}>Read about upcoming features ></Text>
            </Card.Content>
        </Card>

        <Card style={stylesMainScreen.cardSecond} onPress={() => navigation.navigate("Divine Liturgy")}>
            <Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Text>{"\n"}Time to Pray!{"\n"}</Text>
                <Text style={{fontWeight:"bold", fontSize:20}}>The Divine Liturgy {"\n"}</Text>
                <Paragraph>We pray the liturgy every Sunday to celebrate new life in Jesus</Paragraph>
            </Card.Content>
        </Card>
        */

const DivineLiturgyScreen = ({navigation}) => {
  return (
    <View style={stylesDivineLiturgyScreen.container}>
        <Card style={stylesDivineLiturgyScreen.headerContainer}> 
            <Card.Content>
                <Text style={stylesDivineLiturgyScreen.headerText}>Divine Liturgy</Text>
            </Card.Content>
        </Card>

        <TouchableOpacity style={stylesDivineLiturgyScreen.listItemContainer} onPress={() => navigation.navigate("Liturgy")}>  
          <Svg style={{marginTop:9}} width={20} height={20} viewBox="0 0 20 20">
            <Path d="M0,2.7c3.744,0,6.24-2.443,6.24-6.1A12.3,12.3,0,0,0,4.953-8.288a49.759,49.759,0,0,0-3.63-6.293A1.533,1.533,0,0,0,0-15.4a1.536,1.536,0,0,0-1.327.817A49.334,49.334,0,0,0-4.97-8.244,12.335,12.335,0,0,0-6.245-3.4C-6.245.255-3.749,2.7,0,2.7ZM0,.958A4.188,4.188,0,0,1-4.5-3.4a10.187,10.187,0,0,1,1.09-4.008A35.437,35.437,0,0,1-.083-13.131a.092.092,0,0,1,.176,0A35.778,35.778,0,0,1,3.406-7.444,10.447,10.447,0,0,1,4.5-3.4,4.186,4.186,0,0,1,0,.958Z" transform="translate(6.245 15.398)" fill="#e5801c"/>
          </Svg> 
    
          <View style={stylesDivineLiturgyScreen.listItemTextContainer}>
            <Text style={stylesDivineLiturgyScreen.listItemTitle}>
              The Offering of the Lamb
            </Text>
            <Text style={stylesDivineLiturgyScreen.listItemSubtitle}>
              We offer the bread and wine and ourselves to God
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={stylesDivineLiturgyScreen.listItemContainer}>  
          <Svg style={{marginTop:9}} width={20} height={20} viewBox="0 0 20 20">
            <Path d="M-4.707,3.173H6.728a.8.8,0,0,0,.809-.817.928.928,0,0,0-.589-.826c-1.081-.475-1.3-1.969-.193-3.015A2.076,2.076,0,0,0,7.537-3.2v-9.765A2.559,2.559,0,0,0,4.68-15.847H-4.68a2.555,2.555,0,0,0-2.856,2.883V.325A2.533,2.533,0,0,0-4.707,3.173Zm9.237-17.3a1.138,1.138,0,0,1,1.283,1.266v9.4a.612.612,0,0,1-.686.668H-3.546V-14.124ZM-5.814-2.487V-12.858a1.1,1.1,0,0,1,1.028-1.248v11.32A2.657,2.657,0,0,0-5.814-2.487Zm1.327,4.025A1.264,1.264,0,0,1-5.9.176,1.338,1.338,0,0,1-4.417-1.169h8.8a2.662,2.662,0,0,0,.272-.018,2.919,2.919,0,0,0,.088,2.725Z" transform="translate(7.537 15.847)" fill="#e5801c"/>
          </Svg> 
          
          <View style={stylesDivineLiturgyScreen.listItemTextContainer}>
            <Text style={stylesDivineLiturgyScreen.listItemTitle}>
              The Liturgy of the Word
            </Text>
            <Text style={stylesDivineLiturgyScreen.listItemSubtitle}>
              We listen to the Word of God from the Bible and to a sermon
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={stylesDivineLiturgyScreen.listItemContainer}>  
          <Svg style={{marginTop:9}} width={20} height={20} viewBox="0 0 20 20">
            <Path d="M-9.716-4.843a2.323,2.323,0,0,0,2.6,2.637h2.979V.765A2.33,2.33,0,0,0-1.5,3.375H1.507A2.33,2.33,0,0,0,4.144.765V-2.206H7.115a2.323,2.323,0,0,0,2.6-2.637V-7.857a2.321,2.321,0,0,0-2.6-2.628H4.144v-2.979a2.33,2.33,0,0,0-2.637-2.61H-1.5a2.33,2.33,0,0,0-2.637,2.61v2.979H-7.115a2.321,2.321,0,0,0-2.6,2.628Zm1.775-.167V-7.682A.9.9,0,0,1-6.913-8.7h4.562v-4.57A.906.906,0,0,1-1.332-14.3H1.34a.906.906,0,0,1,1.02,1.028V-8.7H6.913A.909.909,0,0,1,7.95-7.682V-5.01A.9.9,0,0,1,6.913-4H2.36V.571A.906.906,0,0,1,1.34,1.6H-1.332A.906.906,0,0,1-2.351.571V-4H-6.913A.9.9,0,0,1-7.941-5.01Z" transform="translate(9.716 16.075)" fill="#e5801c"/>
          </Svg>
      
          <View style={stylesDivineLiturgyScreen.listItemTextContainer}>
            <Text style={stylesDivineLiturgyScreen.listItemTitle}>
              The Liturgy of the Faithful
            </Text>
            <Text style={stylesDivineLiturgyScreen.listItemSubtitle}>
              We receive the Body and Blood of Jesus
            </Text>
          </View>
        </TouchableOpacity>
    </View> 
  );
};

const OfferingOfTheLamb = ({navigation}) => {
  const [textHtml, setHTML] = React.useState('');
  const [isDbLoad, setDbLoad] = React.useState(false);
  const { width } = useWindowDimensions();
  const dbFile = 'table.db';

  const loadDB = async () => {
    if(!isDbLoad){
      try {
        if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
          await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
        };

        await FileSystem.downloadAsync(Asset.fromModule(require('./asset/table.db')).uri, FileSystem.documentDirectory + `SQLite/${dbFile}`).
          then(() => {
            const db = SQLite.openDatabase(dbFile);
            setDbLoad(true);
            db.transaction((tx) => {
              tx.executeSql(
                `select * from text`,
                [], 
                (_, result) => {
                  let i;
                  let rowStrings = BaseLiturgy.liturgyHTML;
                  let rowObject;
                  
                  for(i=0; i < result.rows._array.length; i++){
                    rowObject = result.rows._array[i];
                    rowStrings += `<tr> <td align="left">`;
                    rowStrings += rowObject['Ar'];
                    rowStrings += `</td> <td align="left">`;
                    rowStrings += rowObject['Tr'];
                    rowStrings += `</td> <td align="left">`;
                    rowStrings += rowObject['En'];
                    rowStrings += `</td> </tr>`;
                  }
                  rowStrings += `</table> <br/><br/> </body>`;
                  liturgy = rowStrings;
                  setHTML(liturgy);
                }, 
                (_, err) => {
                    console.log("error");
                    alert("out");
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

  loadDB();

  return (
    <ScrollView style={stylesOfferingOfTheLamb.container}>
      <HTML source={{html: textHtml}} contentWidth={width} />
    </ScrollView>
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

const stylesOfferingOfTheLamb = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
})
