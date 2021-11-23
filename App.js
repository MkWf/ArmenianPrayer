import React, { useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Picker} from 'react-native';


const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <SafeAreaView style={styles.screen}>
      <Picker selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}>
        
        <Picker.Item label="Armenian | Transliteration | English" value="arm_tra_eng" />
        <Picker.Item label="Armenian | Transliteration" value="arm_tra" />
        <Picker.Item label="Armenian" value="arm" />
        <Picker.Item label="English" value="eng" />
      </Picker>
    
      <View style={styles.screenTextContainer}>
        <View style={styles.languageContainer}>
          <Text style={styles.armenianText}>
            My armenian text. My armenian text. My armenian text
          </Text>
        </View>
        
        <View style={styles.languageContainer}>
          <Text style={styles.armenianText}>
            My translit text. My translit text. My translit text
          </Text>
        </View>
        
        <View style={styles.languageContainer}>
          <Text style={styles.armenianText}>
            My english text. My english text. My english text
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
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
  armenianText: {
    fontSize: 20,
  },
  translitText: {
    fontSize: 20,
  },
  englishText: {
    fontSize: 20,
  }
});

export default App;
