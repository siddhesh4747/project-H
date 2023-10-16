import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import Interest from './screens/auth/Interest';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ApplyPage from './screens/apply/FilterPage';
import ProfilePage from './screens/profile/ProfilePage';
import BottomNavigator from './screens/BottomNavigator';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function App() {

const [isLogin, setIsLogin] = useState(false)

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false,statusBarHidden:true}}  initialRouteName={isLogin?'MyTabs':'Signup'}>
        <Stack.Screen name="MyTabs" component={BottomNavigator} options={{}}/>
        <Stack.Screen name="Interest" component={Interest} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;