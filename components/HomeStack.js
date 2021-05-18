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
import CitiesListScreen from '../components/CitiesListScreen'

const Tab = createMaterialBottomTabNavigator()

export default function HomeStackNavigator() {
  return <Text>This is supposed to be deleted</Text>
}
