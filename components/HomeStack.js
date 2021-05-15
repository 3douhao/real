import React from 'react'
import {
  Pressable,
  Text,
  Button,
  SafeAreaView
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './HomeScreen'
import SearchResultScreen from './SearchResultScreen'
import DetailsScreen from './DetailsScreen'
import CreateListingScreen from './CreateListingScreen'

const Stack = createStackNavigator()

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='HomeScreen'
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerStyle: {},
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          title: 'Home'
        }}
      />
      <Stack.Screen
        name='CreateListingScreen'
        component={CreateListingScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: 10
          },
          headerBackImage: () => (
            <Ionicons
              name='chevron-back'
              size={24}
              color='black'
            />
          ),
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          title: '我要卖房'
        }}
      />
      <Stack.Screen
        name='SearchResultScreen'
        component={SearchResultScreen}
      />

      <Stack.Screen
        name='DetailsScreen'
        component={DetailsScreen}
      />
    </Stack.Navigator>
  )
}
