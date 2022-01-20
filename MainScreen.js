import React from "react";
import {StyleSheet, StatusBar, View, Text, SafeAreaView, Image} from "react-native";
import { Card } from 'react-native-elements';

export function MainScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.card} title="Local Modules">
                <Text style={styles.paragraph}>
                    Welcome to the Armenian Prayer App 
                    There's just liturgy for now but more will be coming soon!
                    Read about upcoming features >
                </Text>
            </Card>

            <Card style={styles.card} title="Local Modules">
                <Image source={require('./assets/Gomidas.png')}></Image>
                <Text style={styles.paragraph}>
                    Time to Pray! 
                    The Divine Liturgy
                    We pray the liturgy every Sunday to celebrate new life in Jesus 
                </Text>
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
    },
    card: {
        width: '50%'
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
});