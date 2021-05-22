import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ProfileScreen from '../components/ProfileScreen'
import HomeScreen from '../components/HomeScreen'
import NewsScreen from '../components/NewsScreen'
import WebViewScreen from '../components/WebViewScreen'

const Tab = createMaterialBottomTabNavigator()

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      barStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='home'
              size={focused ? 26 : 20}
              color={focused ? 'dodgerblue' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name='NewsScreen'
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='home'
              size={focused ? 26 : 20}
              color={focused ? 'dodgerblue' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='account'
              color={focused ? 'dodgerblue' : 'gray'}
              size={focused ? 26 : 20}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabScreen

const styles = StyleSheet.create({})
