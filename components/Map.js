import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Map = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('ProfileStack')
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Ionicons
        name='location-outline'
        size={12}
        color='black'
      />
      <Text style={styles.text}>Map</Text>
    </Pressable>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 5
  }
})
