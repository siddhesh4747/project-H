import React from 'react'
import  FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';
import  FontAwesomeIcon5  from 'react-native-vector-icons/FontAwesome5';
import  MaterialCommunityIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileNavigator from './profile/ProfileNavigator';
import ApplyNavigator from './apply/ApplyNavigator';
import ProjectNavigator from './projects/ProjectNavigator';
import GroupNavigator from './group/GroupNavigator';


const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#2462DB',
            tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.8)',
            tabBarLabelStyle: {
                fontWeight: '400',
                fontSize: 10,
            },
            tabBarStyle: {
                backgroundColor: 'black',
                height: 61,
                borderColor:'black',
                paddingBottom:18
            },
        }} 
        sceneContainerStyle={{
            backgroundColor: 'black',
            flex:1
        }}
         
        initialRouteName='ProfileNavigator'>
            <Tab.Screen name="ProjectNavigator" component={ProjectNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcon name={'telescope'} color={color} size={24} />

                ),
                tabBarLabel: 'project',
                
            }} />
            <Tab.Screen name="ApplyNavigator" component={ApplyNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon5 name={'user-tie'} color={color} size={24} />

                ),
                tabBarLabel: 'apply',
            }}  />
            <Tab.Screen name="GroupNavigator" component={GroupNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcon name={'vector-union'} color={color} size={24} />
                ),
                tabBarLabel: 'group',
            }}  />
            <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon name={'user-o'} color={color} size={24} />
                ),
                tabBarLabel: 'profile',
            }}   />
        </Tab.Navigator>
    )
}