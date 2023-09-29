import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import Interest from './screens/auth/Interest';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ApplyPage from './screens/ApplyPage';
import Group from './screens/Group';
import ProfilePage from './screens/profile/ProfilePage';
import Project from './screens/Project';
import BottomNavigator from './components/navigator/BottomNavigator';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function App() {

const [isLogin, setIsLogin] = useState(true)

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={isLogin?'MyTabs':'Signin'}>
        <Stack.Screen name="MyTabs" component={BottomNavigator} />
        <Stack.Screen name="Interest" component={Interest} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;