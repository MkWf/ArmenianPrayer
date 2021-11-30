//import * as React, { useState } from 'react';
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, SafeAreaView, Picker, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Slider } from "@miblanchard/react-native-slider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Liturgy" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={stylesHomeScreen.screen}>
      <Image style={stylesHomeScreen.headerImage}
        source={require('./assets/Gomidas.png')} />
      
      <TouchableOpacity onPress={() => navigation.navigate('Liturgy')}>
        <View style={stylesHomeScreen.listItemContainer}>  
          <Image style={stylesHomeScreen.listItemIcon}
            source={require('./assets/OotL_Icon.png')} />
          
          <View style={stylesHomeScreen.listItemTextContainer}>
            <Text style={stylesHomeScreen.listItemTitle}>
              The Offering of the Lamb
            </Text>
            <Text style={stylesHomeScreen.listItemSubtitle}>
              We offer the bread and wine and ourselves to God
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={stylesHomeScreen.listItemContainer}>  
        <Image style={stylesHomeScreen.listItemIcon}
          source={require('./assets/LotW_Icon.png')} />
        
        <View style={stylesHomeScreen.listItemTextContainer}>
          <Text style={stylesHomeScreen.listItemTitle}>
            The Liturgy of the Word
          </Text>
          <Text style={stylesHomeScreen.listItemSubtitle}>
            We listen to the Word of God from the Bible and to a sermon
          </Text>
        </View>
      </View>
      <View style={stylesHomeScreen.listItemContainer}>  
        
        <Image style={stylesHomeScreen.listItemIcon}
          source={require('./assets/LotF_Icon.png')} />
    
        <View style={stylesHomeScreen.listItemTextContainer}>
          <Text style={stylesHomeScreen.listItemTitle}>
            The Liturgy of the Faithful
          </Text>
          <Text style={stylesHomeScreen.listItemSubtitle}>
            We receive the Body and Blood of Jesus
          </Text>
        </View>
      </View>
    </View>
  );
}

function TextScreen({navigation}) {
  const [languageValue, setlanguageValue] = useState("arm_tra_eng");
  const [fontValue, setFontValue] = useState(20);
  const [isFullScreen, setFullscreen] = useState(false);

  if(languageValue == "arm_tra_eng"){
    return (
      <SafeAreaView style={stylesTextScreen.screen}>
        <Picker 
          languageValue={languageValue}
          onValueChange={(itemValue) => setlanguageValue(itemValue)}>
        
          <Picker.Item label="Armenian | Transliteration | English" value="arm_tra_eng" />
          <Picker.Item label="Armenian | Transliteration" value="arm_tra" />
          <Picker.Item label="Armenian" value="arm" />
        </Picker>

        <Text> Font Size: {fontValue} </Text>
        <Slider
            value={fontValue}
            minimumValue={10}
            maximumValue={30}
            step={2}
            trackClickable={true}
            onValueChange={value => setFontValue(value)}
        />

        <Button 
          title="Fullscreen"
          onPress= {() => setFullscreen(!isFullScreen)}/>
        <StatusBar hidden={isFullScreen}/>

      <ScrollView>
        <View style={stylesTextScreen.screenTextContainer}>
          <View style={stylesTextScreen.languageContainer}>
            <Text style={{fontSize: fontValue[0]}}>
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
            </Text>
          </View>
          
          <View style={stylesTextScreen.languageContainer}>
            <Text style={{fontSize: fontValue[0]}}>
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
            </Text>
          </View>

          <View style={stylesTextScreen.languageContainer}>
            <Text style={{fontSize: fontValue[0]}}>
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
            </Text>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    )
  }else if(languageValue == "arm_tra"){
    return (
      <SafeAreaView style={stylesTextScreen.screen}>
        <Picker 
          languageValue={languageValue}
          onValueChange={(itemValue) => setlanguageValue(itemValue)}>
        
          <Picker.Item label="Armenian | Transliteration | English" value="arm_tra_eng" />
          <Picker.Item label="Armenian | Transliteration" value="arm_tra" />
          <Picker.Item label="Armenian" value="arm" />
        </Picker>

        <Text> Font Size: {fontValue} </Text>
        <Slider
            value={fontValue}
            minimumValue={10}
            maximumValue={30}
            step={2}
            trackClickable={true}
            onValueChange={value => setFontValue(value)}
        />
        
        <ScrollView>
        <View style={stylesTextScreen.screenTextContainer}>
          <View style={stylesTextScreen.languageContainer}>
            <Text style={{fontSize: fontValue[0]}}>
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
            </Text>
          </View>

          <View style={stylesTextScreen.languageContainer}>
            <Text style={{fontSize: fontValue[0]}}>
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
            </Text>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    )
  }else if(languageValue == "arm"){
    return (
      <SafeAreaView style={stylesTextScreen.screen}>
        <Picker 
          languageValue={languageValue}
          onValueChange={(itemValue) => setlanguageValue(itemValue)}>
        
          <Picker.Item label="Armenian | Transliteration | English" value="arm_tra_eng" />
          <Picker.Item label="Armenian | Transliteration" value="arm_tra" />
          <Picker.Item label="Armenian" value="arm" />
        </Picker>

        <Text> Font Size: {fontValue} </Text>
        <Slider
            value={fontValue}
            minimumValue={10}
            maximumValue={30}
            step={2}
            trackClickable={true}
            onValueChange={value => setFontValue(value)}
        />
        
        <ScrollView>
        <View style={stylesTextScreen.screenTextContainer}>
          <View style={stylesTextScreen.languageContainer}>
            <Text style={{fontSize: fontValue[0]}}>
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
            </Text>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const stylesHomeScreen = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#ecf0f1',
  },
  headerImage: {
    alignSelf: "center",
    justifyContent: "center",
    height: 100,
    width: 400
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
  },
});

const stylesTextScreen = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
  screenTextContainer: {
    flexDirection: "row"
  },
  languageContainer: {
    width: "33%",
    padding: 4,
    flexGrow: 1
  },
  text: {
    fontSize: 20
  }
});