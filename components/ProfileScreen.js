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

export default function ProfileStack() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        let {
          status
        } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg(
            'Permission to access location was denied'
          )
          return
        }
      } catch (e) {
        console.error(e.message)
      }

      let location = await Location.getCurrentPositionAsync(
        {}
      )
      setLocation(location)
    })()
  })

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  return (
    <SafeAreaView>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.container}>
        <MapView
          toolbarEnabled
          showsMyLocationButton
          showsScale
          minZoomLevel={6}
          zoomEnabled
          zoomControlEnabled
          style={styles.map}
        >
          <Marker
            title='hhahahha'
            coordinate={{
              latitude: 40.0359,
              longitude: 116.21
            }}
          />
        </MapView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue'
  },
  text: {
    fontSize: 20,
    color: 'dodgerblue'
  },
  map: {
    width: 400,
    height: 400
  }
})
