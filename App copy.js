import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerImage}>
        <Image source={require('./assets/Gomidas.png')}/>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Image source={require('./assets/OotL_Icon.png')}/>
          
          <View flexDirection="column">
            <Text style={styles.itemTitle}>
              {"The Offering of the Lamb"}
            </Text>
            <Text style={styles.itemSubtitle}>
              {"We offer the bread and wine and ourselves to God"}
            </Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <Image source={require('./assets/LotW_Icon.png')}/>
          
          <View flexDirection="column">
            <Text style={styles.itemTitle}>
              {"The Liturgy of the Word"}
            </Text>
            <Text style={styles.itemSubtitle}>
              {"We listen to the Word of God from the Bible and to a sermon"}
            </Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <Image source={require('./assets/LotF_Icon.png')}/>
          
          <View flexDirection="column">
            <Text style={styles.itemTitle}>
              {"The Liturgy of the Faithful"}
            </Text>
            <Text style={styles.itemSubtitle}>
                {"We receive the Body and Blood of Jesus"}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiquewhite",
    flexDirection: "column",
  },
  headerImage: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  listContainer: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  listItem: {
    flexDirection: "row",
    alignItems: 'center'
  },
  listText: {
    flexDirection: "column",
  },
  itemLogo: {
    height: 160,
    width: 160,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  itemSubtitle: {
    fontSize: 20,
    color: "grey",
    paddingRight: 130
  },

});


