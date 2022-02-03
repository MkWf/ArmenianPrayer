import React, { useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { updateUsername, updateArmenian, updateTranslit, updateEnglish } from './src/asset/actions/users';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useSelector, useDispatch } from 'react-redux';


const CustomSidebarMenu = (props) => {
  const dispatch = useDispatch();

  const user = useSelector( state => state.user);
  const english = useSelector( state => state.english);
  const armenian = useSelector( state => state.armenian);
  const translit = useSelector( state => state.translit);

  const saveUsername = () => {
    // in case the username hasnt been updated
    if(user.username == false){
      dispatch(updateUsername(true));
    }else{
      dispatch(updateUsername(false));
    }
  }

  const saveEnglish = () => {
    // in case the username hasnt been updated
    if(english.isEnglish == false){
      dispatch(updateEnglish(true));
    }else{
      dispatch(updateEnglish(false));
    }
  }

  const saveArmenian = () => {
    // in case the username hasnt been updated
    if(armenian.isArmenian == false){
      dispatch(updateArmenian(true));
    }else{
      dispatch(updateArmenian(false));
    }
  }

  const saveTranslit = () => {
    // in case the username hasnt been updated
    if(translit.isTranslit == false){
      dispatch(updateTranslit(true));
    }else{
      dispatch(updateTranslit(false));
    }
  }


 

  
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.mainContainer}>
            <Text style={{fontSize:30, marginLeft:20, marginBottom:20}}>Settings</Text>

            <Text style={styles.sectionText}>Display Languages</Text>
            <View style={styles.itemsRow}>
              <TouchableOpacity style={armenian.isArmenian ? styles.cardActive : styles.cardInactive} 
                 onPress={() => saveArmenian()}>
                   
                <Text>հայերեն</Text>
              </TouchableOpacity>

              <TouchableOpacity style={translit.isTranslit ? styles.cardActive : styles.cardInactive} 
                 onPress={() => saveTranslit()}>
                   
                <Text>Hayeren</Text>
              </TouchableOpacity>

              <TouchableOpacity style={english.isEnglish ? styles.cardActive : styles.cardInactive} 
                 onPress={() => saveEnglish()}>
                   
                <Text>English</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.itemsRow}>
              
            </View>

            <Text style={styles.sectionText}>Presentation Mode</Text>
            <View style={styles.itemsRow}>
              <TouchableOpacity style={styles.scrollInactive} >
                <View style={styles.scrollSides}></View>
                <Text style={styles.scrollCenter}>Scroll</Text>
                <View style={styles.scrollSides}></View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.slideInactive} >
                <Text style={styles.slideBoxNonText}></Text>
                <Text style={styles.slideBoxNonText}></Text>
                <Text style={styles.slideBoxNonText}></Text>
                <Text style={styles.slideshowText}>Slideshow</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionText}>Screen Orientation</Text>
            <View style={styles.itemsRow}>
              <TouchableOpacity style={styles.portraitInactive} >
                <Text style={styles.portraitText}>Portrait</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.landscapeInactive} >
                <View style={styles.landscapeBackground}></View>
                <Text style={styles.landscapeText}>Landscape</Text>
              </TouchableOpacity>
            </View>
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
  cardInactive: {
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
  },
  cardActive: {
    shadowColor: 'black',
    shadowRadius: 200,
    shadowOpacity: 100,
    elevation: 3,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems:"center"
  },
  scrollInactive: {
    shadowColor: 'black',
    shadowRadius: 200,
    shadowOpacity: 100,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  slideInactive: {
    shadowColor: 'black',
    shadowRadius: 200,
    shadowOpacity: 100,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
  },
  portraitInactive: {
    shadowColor: 'black',
    shadowRadius: 200,
    shadowOpacity: 100,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  landscapeInactive: {
    shadowColor: 'black',
    shadowRadius: 200,
    shadowOpacity: 100,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  scrollSides: {
    flex: 1
  },
  scrollCenter: {
    flex:3, 
    alignSelf:"center", 
    backgroundColor:"#C0C0C0", 
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  slideBoxText: {
    flex:1, 
    alignSelf:"center", 
    backgroundColor:"#C0C0C0", 
    textAlign: "center"
  },
  slideBoxNonText: { 
    flex: 1,
    backgroundColor:"#C0C0C0",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5
  },
  slideshowText: {
    alignSelf: "center",
    position: 'absolute',
    paddingLeft: 30
  },
  landscapeBackground: {
    flex: 1,
    backgroundColor:"#C0C0C0",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  portraitText: {
    flex:1, 
    alignSelf:"center", 
    backgroundColor:"#C0C0C0", 
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  landscapeText: {
    alignSelf: "center",
    justifyContent: 'center',
    position: 'absolute',
    top: 29
  }
});

export default CustomSidebarMenu;