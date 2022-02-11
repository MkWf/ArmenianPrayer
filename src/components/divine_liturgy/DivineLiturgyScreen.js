import React from 'react';
import {StyleSheet, View, Text, Alert, TouchableOpacity, useWindowDimensions, ScrollView, Button} from "react-native"; //OfferingOfTheLamb-useWindowDimensions,ScrollView
import { Card, Paragraph } from 'react-native-paper';
import Svg, { Path } from "react-native-svg" //DivineLiturgyScreen 

export const DivineLiturgyScreen = ({navigation}) => {
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

  
const stylesDivineLiturgyScreen = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f5f5dd',
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