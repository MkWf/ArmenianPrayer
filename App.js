import React from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';


export default function App() {
  return (
    <View style={styles.screen}>
      
      <View style={styles.languageContainer}>
        <Text style={styles.armenianText}>
          My armenian text. My armenian text. My armenian text
          My armenian text. My armenian text. My armenian text
          My armenian text. My armenian text. My armenian text
          My armenian text. My armenian text. My armenian text
          My armenian text. My armenian text. My armenian text
          My armenian text. My armenian text. My armenian text
        </Text>
      </View>

      <View style={styles.languageContainer}>
        <Text style={styles.armenianText}>
          My translit text. My translit text. My translit text
          My translit text. My translit text. My translit text
          My translit text. My translit text. My translit text
          My translit text. My translit text. My translit text
          My translit text. My translit text. My translit text
          My translit text. My translit text. My translit text
        </Text>
      </View>

      <View style={styles.languageContainer}>
        <Text style={styles.armenianText}>
          My english text. My english text. My english text
          My english text. My english text. My english text
          My english text. My english text. My english text
          My english text. My english text. My english text
          My english text. My english text. My english text
          My english text. My english text. My english text
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
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


