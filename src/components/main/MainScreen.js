import { createDrawerNavigator } from '@react-navigation/drawer'; 
import CustomSidebarMenu from './CustomSidebarMenu';
import {StyleSheet, View, Text, Alert, TouchableOpacity, useWindowDimensions, ScrollView, Button} from "react-native"; 


const Drawer = createDrawerNavigator();  

export const MainScreenNavigator = ({navigation}) => {
    return(
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Armenian Prayer"  //name beside drawer icon on toolbar 
          component={MainScreen}  //the screen to be displayed 
          options={{
            headerStyle: {
              backgroundColor: '#f5f5dd', //Set Header color
            },
          }}
        />
      </Drawer.Navigator>
    );
  }
  
  const MainScreen = ({navigation}) => {
    return (
      <View style={stylesMainScreen.container}>
          <Card style={stylesMainScreen.cardMain}> 
              <Card.Content>
                  <Text style={{fontWeight:"bold", fontSize:20}}>Welcome to the Armenian Prayer App {"\n"}</Text>
                  <Text>There's just liturgy for now but more will be coming soon!{"\n"}</Text>
                  <Text style={{color:"#FFA500"}} onPress={() => Alert.alert("Pushed")}>Read about upcoming features ></Text>
              </Card.Content>
          </Card>
  
          <Card style={stylesMainScreen.cardSecond} onPress={() => navigation.navigate("Divine Liturgy")}>
              <Card.Content>
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                  <Text>{"\n"}Time to Pray!{"\n"}</Text>
                  <Text style={{fontWeight:"bold", fontSize:20}}>The Divine Liturgy {"\n"}</Text>
                  <Paragraph>We pray the liturgy every Sunday to celebrate new life in Jesus</Paragraph>
              </Card.Content>
          </Card>
      </View> 
    );
  };

  const stylesMainScreen = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f5f5dd',
      justifyContent: "space-evenly",
    },
    cardMain: {
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