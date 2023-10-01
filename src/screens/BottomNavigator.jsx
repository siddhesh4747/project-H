import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDoorOpen, faGroupArrowsRotate, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Project from './Project';
import Group from './Group';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import ProfileNavigator from './profile/ProfileNavigator';
import ApplyNavigator from './apply/ApplyNavigator';


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
         
        initialRouteName='ApplyNavigator'>
            <Tab.Screen name="Project" component={Project} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faMagnifyingGlass} color={color} size={24} />
                ),
                tabBarLabel: 'project',
            }} />
            <Tab.Screen name="ApplyNavigator" component={ApplyNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faDoorOpen} color={color} size={24} />
                ),
                tabBarLabel: 'apply',
            }}  />
            <Tab.Screen name="Group" component={Group} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faGroupArrowsRotate} color={color} size={24} />
                ),
                tabBarLabel: 'group',
            }}  />
            <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faUser} color={color} size={24} />
                ),
                tabBarLabel: 'profile',
            }}   />
        </Tab.Navigator>
    )
}