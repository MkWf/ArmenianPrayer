import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
    <Image style={styles.headerImage}
      source={require('./assets/Gomidas.png')} />
      
    <View style={styles.listItemContainer}>  
      <Image style={styles.listItemIcon}
        source={require('./assets/OotL_Icon.png')} />
      
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>
          The Offering of the Lamb
        </Text>
        <Text style={styles.listItemSubtitle}>
          We offer the bread and wine and ourselves to God
        </Text>
      </View>
    </View>
    <View style={styles.listItemContainer}>  
      <Image style={styles.listItemIcon}
        source={require('./assets/LotW_Icon.png')} />
      
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>
          The Liturgy of the Word
        </Text>
        <Text style={styles.listItemSubtitle}>
          We listen to the Word of God from the Bible and to a sermon
        </Text>
      </View>
    </View>
    <View style={styles.listItemContainer}>  
      
      <Image style={styles.listItemIcon}
        source={require('./assets/LotF_Icon.png')} />
  
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>
          The Liturgy of the Faithful
        </Text>
        <Text style={styles.listItemSubtitle}>
          We receive the Body and Blood of Jesus
        </Text>
      </View>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#ecf0f1',
  },
  headerImage: {
    alignSelf: "center",
    justifyContent: "center",
    height: 150,
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
