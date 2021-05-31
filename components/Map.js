import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native'
import { Entypo } from '@expo/vector-icons'

const Map = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('ProfileScreen')
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Entypo name='location' size={20} color='black' />
      <Text style={styles.text}>地图</Text>
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
    marginLeft: 5,
    fontSize: 20
  }
})
