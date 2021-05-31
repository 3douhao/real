import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SelectCity = ({
  city = 'Beijing',
  setModalVisible
}) => {
  const onPress = () => {
    setModalVisible(true)
  } //Todo
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{city}</Text>
      <Ionicons
        name='chevron-down'
        size={12}
        color='black'
      />
    </Pressable>
  )
}

export default SelectCity

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  text: {
    marginRight: 5,
    fontSize: 20
  }
})
