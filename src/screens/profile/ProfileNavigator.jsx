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
import OurPaperJournal from './OurPaperJournal';
import Bookmarks from './Bookmarks';
import Settings from './Settings';
import Notification from './Notification';
import FeedbackPage from './FeedbackPage';
import AddNewProjectForPeople from './AddNewProjectForPeople';
import DeleteAccount from './DeleteAccount';
import SignoutPage from './SignoutPage';
import ViewOnWeb from './ViewOnWeb';

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName='SignoutPage'  screenOptions={{headerShown:false}}  >
    <Stack.Screen name="Profile" component={ProfilePage} />
    <Stack.Screen name="ActiveProject" component={ActiveProject} />
    <Stack.Screen name="DoneProject" component={DoneProject} />
    <Stack.Screen name="UploadResume" component={UploadResume} />
    <Stack.Screen name="AddNewProject" component={AddNewProject} />
    <Stack.Screen name="AddNewProject1" component={AddNewProject1} />
    <Stack.Screen name="ContactPeople" component={ContactPeople} />
    <Stack.Screen name="AddNewProjectForPeople" component={AddNewProjectForPeople} />
    <Stack.Screen name="OurPaperJournal" component={OurPaperJournal} />
    <Stack.Screen name="Bookmarks" component={Bookmarks} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="SignoutPage" component={SignoutPage} />
    <Stack.Screen name="FeedbackPage" component={FeedbackPage} />
    <Stack.Screen name="ViewOnWeb" component={ViewOnWeb} />
    <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
   
  </Stack.Navigator>
  )
}