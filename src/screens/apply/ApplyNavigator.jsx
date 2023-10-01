import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplyPage from './ApplyPage';
import AdminInfo from './AdminInfo';
import MessagePage from './MessagePage';


const Stack = createNativeStackNavigator();

export default function ApplyNavigator() {
  return (
    <Stack.Navigator initialRouteName='Apply'  screenOptions={{headerShown:false}}  >
    <Stack.Screen name="Apply" component={ApplyPage} />
    <Stack.Screen name="AdminInfo" component={AdminInfo} />
    <Stack.Screen name="MessagePage" component={MessagePage} />
    
   
  </Stack.Navigator>
  )
}