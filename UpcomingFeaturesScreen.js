import React from "react";
import {StyleSheet, StatusBar, View, Text, SafeAreaView, Image, Alert} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export function MainScreen({navigation}) {
    return (
         <View style={styles.container}>
            <Card style={styles.cardMain}> 
                <Card.Content>
                    <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to the Armenian Prayer App {"\n"}</Text>
                    <Text>There's just liturgy for now but more will be coming soon!{"\n"}</Text>
                    <Text style={{color:"#FFA500"}} onPress={() => Alert.alert("Pushed")}>Read about upcoming features ></Text>
                </Card.Content>
            </Card>

            <Card style={styles.cardSecond}> 
                <Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Text>{"\n"}Time to Pray!{"\n"}</Text>
                    <Text style={{fontWeight:"bold", fontSize:20}}>The Divine Liturgy {"\n"}</Text>
                    <Paragraph>We pray the liturgy every Sunday to celebrate new life in Jesus</Paragraph>
                </Card.Content>
            </Card>
        </View> 
        
       /* <SafeAreaView style={styles.container}>
                <Text style={styles.paragraph}>
                    Welcome to the Armenian Prayer App 
                    There's just liturgy for now but more will be coming soon!
                    Read about upcoming features >
                </Text>
                <Image source={require('./assets/Gomidas.png')}></Image>
                <Text style={styles.paragraph}>
                    Time to Pray! 
                    The Divine Liturgy
                    We pray the liturgy every Sunday to celebrate new life in Jesus 
                </Text>
        </SafeAreaView>*/
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f5f5dd',
      justifyContent: "space-evenly"
    },
    cardMain: {
        padding: 0, 
        margin: 0,
        elevation: 4,
        width: '85%',
        alignItems: "center",
        justifyContent: "center"
    },
    cardSecond: {
        elevation: 4,
        width: '85%'
    },
    cardImage: {
        width: '100%',
        height: 100
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 24
    },
    cardSubtext: {
        fontSize: 16,
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
});