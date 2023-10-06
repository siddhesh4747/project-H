
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Group from './Group';
import Group2 from './Group2';
import Tasks from './Tasks';
import AddTasks from './AddTasks';
import Issues from './Issues';
import AddIssues from './AddIssues';
import Comments from './Comments';
import Chat from './Chat';

import Members from './Members';
import Messages from './Messages';


const Stack = createNativeStackNavigator();

export default function GroupNavigator() {
  return (
    <Stack.Navigator initialRouteName='Members'  screenOptions={{headerShown:false}}  >
    <Stack.Screen name="Group" component={Group} />
    <Stack.Screen name="Group2" component={Group2} />
    <Stack.Screen name="Tasks" component={Tasks} />
    <Stack.Screen name="AddTasks" component={AddTasks} />
    <Stack.Screen name="Issues" component={Issues} />
    <Stack.Screen name="AddIssues" component={AddIssues} />
    <Stack.Screen name="Comments" component={Comments} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Members" component={Members} />
    <Stack.Screen name="Messages" component={Messages} />
  
   

  </Stack.Navigator>
  )
}