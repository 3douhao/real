import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import SearchResultScreen from './SearchResultScreen'
import DetailsScreen from './DetailsScreen'

const Stack = createStackNavigator()

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'dodgerblue'
        },
        headerTintColor: '#fff'
      }}
      initialRouteName='HomeScreen'
      headerMode='none'
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: 'dodgerblue'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#fff',
          title: 'Home'
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
