import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from './ProfilePage';
import ActiveProject from './ActiveProject';
import DoneProject from './DoneProject';
import UploadResume from './UploadResume';
import AddNewProject from './AddNewProject';
import ContactPeople from './ContactPeople';
import AddNewProject1 from './AddNewProject1';

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName='AddNewProject1'  screenOptions={{headerShown:false}}  >
    <Stack.Screen name="Profile" component={ProfilePage} />
    <Stack.Screen name="ActiveProject" component={ActiveProject} />
    <Stack.Screen name="DoneProject" component={DoneProject} />
    <Stack.Screen name="UploadResume" component={UploadResume} />
    <Stack.Screen name="AddNewProject" component={AddNewProject} />
    <Stack.Screen name="AddNewProject1" component={AddNewProject1} />
    <Stack.Screen name="ContactPeople" component={ContactPeople} />
   
  </Stack.Navigator>
  )
}