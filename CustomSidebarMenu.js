import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const { state, descriptors, navigation } = props;
  let lastGroupName = '';
  let newGroup = true;

  const [allLang, setAllLang] = React.useState(true);
  const [engLang, setEngLang] = React.useState(false);
  const [armLang, setArmLang] = React.useState(false);
  const [traLang, setTraLang] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.mainContainer}>
            <Text style={{fontSize:30, marginLeft:20, marginBottom:20}}>Settings</Text>

            <Text style={styles.sectionText}>Display Languages</Text>
            <View style={styles.itemsRow}>
                <TouchableOpacity style={styles.card} onPress={}>
                    <Text>English</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.card}>
                    <Text>հայերեն</Text>
                </TouchableOpacity>
            </View>

                <View style={styles.itemsRow}>
                <TouchableOpacity style={styles.card}>
                    <Text>Hayeren</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.card}>
                    <Text>All</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionText}>Presentation Mode</Text>
            <View style={{flexDirection:"row"}}>

                </View>
            <Text style={styles.sectionText}>Screen Orientation</Text>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
  },
  sectionText: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 10
  },
  itemsRow:{
    flexDirection:"row", 
    justifyContent:"space-evenly"
  },
  card: {
    shadowColor: 'black',
    shadowRadius: 200,
    shadowOpacity: 100,
    elevation: 3,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems:"center"
  }
});

export default CustomSidebarMenu;