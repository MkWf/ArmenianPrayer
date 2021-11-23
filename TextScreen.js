import React, { useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Picker} from 'react-native';


export default function App () {

  const [selectedValue, setSelectedValue] = useState("arm_tra_eng");

  if(selectedValue == "arm_tra_eng"){
    return (
      <SafeAreaView style={styles.screen}>
        <Picker 
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}>
        
          <Picker.Item label="Armenian | Transliteration | English" value="arm_tra_eng" />
          <Picker.Item label="Armenian | Transliteration" value="arm_tra" />
          <Picker.Item label="Armenian" value="arm" />
        </Picker>
        
        <View style={styles.screenTextContainer}>
          <View style={styles.languageContainer}>
            <Text style={styles.text}>
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
            </Text>
          </View>

          <View style={styles.languageContainer}>
            <Text style={styles.text}>
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
            </Text>
          </View>

          <View style={styles.languageContainer}>
            <Text style={styles.text}>
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
              My english text. My english text. My english text
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }else if(selectedValue == "arm_tra"){
    return (
      <SafeAreaView style={styles.screen}>
        <Picker 
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}>
        
          <Picker.Item label="Armenian | Transliteration | English" value="arm_tra_eng" />
          <Picker.Item label="Armenian | Transliteration" value="arm_tra" />
          <Picker.Item label="Armenian" value="arm" />
        </Picker>
        
        <View style={styles.screenTextContainer}>
          <View style={styles.languageContainer}>
            <Text style={styles.text}>
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
            </Text>
          </View>

          <View style={styles.languageContainer}>
            <Text style={styles.text}>
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
              My translit text. My translit text. My translit text
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }else if(selectedValue == "arm"){
    return (
      <SafeAreaView style={styles.screen}>
        <Picker 
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}>
        
          <Picker.Item label="Armenian | Transliteration | English" value="arm_tra_eng" />
          <Picker.Item label="Armenian | Transliteration" value="arm_tra" />
          <Picker.Item label="Armenian" value="arm" />
        </Picker>
        
        <View style={styles.screenTextContainer}>
          <View style={styles.languageContainer}>
            <Text style={styles.text}>
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
              My armenian text. My armenian text. My armenian text
            </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
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
    fontSize: 20,
  }
});
