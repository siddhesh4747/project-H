
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Projects from './Projects';
import Projects2 from './Projects2';
import AdminInfo from './AdminInfo';
import Issues from './Issues';
import AddIssues from './AddIssues';
import Comments from './Comments';


const Stack = createNativeStackNavigator();

export default function ProjectNavigator() {
  return (
    <Stack.Navigator initialRouteName='Projects'  screenOptions={{headerShown:false}}  >
    <Stack.Screen name="Projects" component={Projects} />
    <Stack.Screen name="Projects2" component={Projects2} />
    <Stack.Screen name="AdminInfo" component={AdminInfo} />
    <Stack.Screen name="Issues" component={Issues} />
    <Stack.Screen name="AddIssues" component={AddIssues} />
    <Stack.Screen name="Comments" component={Comments} />
   

  </Stack.Navigator>
  )
}