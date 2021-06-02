import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import {
  Platform,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import * as Location from 'expo-location'
import { color } from 'react-native-reanimated'

import Constants from 'expo-constants'
import ProfileIcon from '../components/ProfileIcon'

export default function ProfileScreen() {
  console.log(Constants.Dimensions)
  return (
    <SafeAreaView>
      <ProfileIcon />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'dodgerblue'
  },
  map: {
    width: 400,
    height: 400
  }
})
