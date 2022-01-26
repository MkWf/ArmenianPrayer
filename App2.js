import 'react-native-gesture-handler';

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Armenian Prayer" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Armenian Prayer" component={MainScreen.MainScreenHolder } />  
          <Stack.Screen name="Divine Liturgy Screen" component={MainScreen.DivineLiturgyScreen } />  
        </Stack.Navigator>
      </NavigationContainer>
    );
}




