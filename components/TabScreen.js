import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import CreateListingScreen from '../components/CreateListingScreen'
import ProfileScreen from '../components/ProfileScreen'
import HomeScreen from '../components/HomeScreen'
import NewsScreen from '../components/NewsScreen'
import WebViewScreen from '../components/WebViewScreen'
import ChooseWhatTypeOfListingToCreate from './ChooseWhatTypeOfListingToCreate'

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
          title: '首页',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='home'
              size={focused ? 24 : 20}
              color={focused ? 'dodgerblue' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name='CreateListingScreen'
        component={CreateListingScreen}
        options={{
          title: '发布房源',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='add-circle'
              size={focused ? 24 : 20}
              color={focused ? 'dodgerblue' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title: '我的',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='account'
              color={focused ? 'dodgerblue' : 'gray'}
              size={focused ? 24 : 20}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabScreen

const styles = StyleSheet.create({})
