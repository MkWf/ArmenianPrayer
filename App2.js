/*
=================================

import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Armenian Prayer" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Armenian Prayer" component={MainScreen.MainScreenHolder } />  
        <Stack.Screen name="Divine Liturgy Screen" component={MainScreen.DivineLiturgyScreen } />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

===================================

<Drawer.Navigator
  drawerContent={(props) => <CustomSidebarMenu {...props} />}>
  <Drawer.Screen
    name="Armenian Prayer"  //name beside drawer icon on toolbar 
    component={MainScreen}  //the screen to be displayed 
  />
</Drawer.Navigator>

===================================

const Stack = createNativeStackNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Armenian Prayer" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Armenian Prayer" component={MainScreen.MainScreenHolder } />  
        <Stack.Screen name="Divine Liturgy Screen" component={MainScreen.DivineLiturgyScreen } />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

====================================

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'First Page1', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}


*/


