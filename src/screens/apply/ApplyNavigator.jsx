import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplyPage from './ApplyPage';
import AdminInfo from './AdminInfo';
import MessagePage from './MessagePage';
import ApplyPage2 from './ApplyPage2';
import FilterPage from './FilterPage';


const Stack = createNativeStackNavigator();

export default function ApplyNavigator() {
  return (
    <Stack.Navigator initialRouteName='FilterPage'  screenOptions={{headerShown:false}}  >
    <Stack.Screen name="FilterPage" component={FilterPage} />
    <Stack.Screen name="Apply" component={ApplyPage} />
    <Stack.Screen name="ApplyPage2" component={ApplyPage2} />
    <Stack.Screen name="AdminInfo" component={AdminInfo} />
    <Stack.Screen name="MessagePage" component={MessagePage} />

  </Stack.Navigator>
  )
}