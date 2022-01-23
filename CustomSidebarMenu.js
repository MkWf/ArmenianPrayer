import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const { state, descriptors, navigation } = props;
  let lastGroupName = '';
  let newGroup = true;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {state.routes.map((route) => {
          const { drawerLabel, activeTintColor, groupName } = descriptors[
            route.key
          ].options;
          if (lastGroupName !== groupName) {
            newGroup = true;
            lastGroupName = groupName;
          } else newGroup = false;
          return (
            <>
              {newGroup ? (
                <View style={styles.mainContainer}>
                    <Text style={{fontSize:30, marginLeft:20, marginBottom:20}}>Settings</Text>

                    <Text style={styles.sectionText}>Display Languages</Text>
                    <View style={styles.itemsRow}>
                        <View style={styles.card}>
                            <Text>English</Text>
                        </View>
                            
                        <View style={styles.card}>
                            <Text>հայերեն</Text>
                        </View>
                    </View>

                     <View style={styles.itemsRow}>
                        <View style={styles.card}>
                            <Text>Hayeren</Text>
                        </View>
                            
                        <View style={styles.card}>
                            <Text>All</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionText}>Presentation Mode</Text>
                    <View style={{flexDirection:"row"}}>

                        </View>
                    <Text style={styles.sectionText}>Screen Orientation</Text>
                </View>
              ) : null}
              <DrawerItem
                key={route.key}
                label={({ color }) => (
                  <Text style={{ color }}>{drawerLabel}</Text>
                )}
                focused={
                  state.index ===
                  state.routes.findIndex((e) => e.name === route.name)
                }
                activeTintColor={activeTintColor}
                onPress={() => navigation.navigate(route.name)}
              />
            </>
          );
        })}
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
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 1,
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