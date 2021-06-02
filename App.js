import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  NavigationContainer,
  DefaultTheme
} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import ChooseWhatTypeOfListingToCreate from './components/ChooseWhatTypeOfListingToCreate'
import EstateNameInputScreen from './components/EstateNameInputScreen'
import WebViewScreen from './components/WebViewScreen'
import CityInputScreen from './components/CityInputScreen'
import CreateListingScreen from './components/CreateListingScreen'
import CitiesListScreen from './components/CitiesListScreen'
import DetailsScreen from './components/DetailsScreen'
import TabScreen from './components/TabScreen'
import SearchResultScreen from './components/SearchResultScreen'
import SearchTermInputScreen from './components/SearchTermInputScreen'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    background: 'white'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='TabScreen'
      >
        <Stack.Screen
          name='TabScreen'
          component={TabScreen}
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
          name='CitiesListScreen'
          component={CitiesListScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: '请选择城市',
            headerBackImage: () => (
              <Ionicons
                name='chevron-back'
                size={24}
                color='black'
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 10
            }
          }}
        />
        <Stack.Screen
          name='SearchResultScreen'
          component={SearchResultScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: '搜索结果',
            headerBackImage: () => (
              <Ionicons
                name='chevron-back'
                size={24}
                color='black'
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 10
            }
          }}
        />

        <Stack.Screen
          name='ChooseWhatTypeOfListingToCreate'
          component={ChooseWhatTypeOfListingToCreate}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: '请选择发布房源的类型',
            headerBackImage: () => (
              <Ionicons
                name='chevron-back'
                size={24}
                color='black'
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 10
            }
          }}
        />
        <Stack.Screen
          name='DetailsScreen'
          component={DetailsScreen}
        />
        <Stack.Screen
          name='CityInputScreen'
          component={CityInputScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: '请输入城市名',
            headerBackImage: () => (
              <Ionicons
                name='chevron-back'
                size={24}
                color='black'
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 10
            }
          }}
        />
        <Stack.Screen
          name='EstateNameInputScreen'
          component={EstateNameInputScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: '请输入小区名',
            headerBackImage: () => (
              <Ionicons
                name='chevron-back'
                size={24}
                color='black'
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 10
            }
          }}
        />
        <Stack.Screen
          name='SearchTermInputScreen'
          component={SearchTermInputScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: '请输入小区名',
            headerBackImage: () => (
              <Ionicons
                name='chevron-back'
                size={24}
                color='black'
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 10
            }
          }}
        />
      </Stack.Navigator>
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
