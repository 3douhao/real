import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './components/HomeScreen'
import SearchResultScreen from './components/SearchResultScreen'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeStack from './components/HomeStack'
import ProfileStack from './components/ProfileStack'

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: 'white'
        }}
        activeColor='dodgerblue'
      >
        <Tab.Screen
          name='HomeStack'
          component={HomeStack}
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
          // style={styles.tab}
          name='ProfileStack'
          component={ProfileStack}
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
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
