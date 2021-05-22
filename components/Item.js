import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Item = ({ item, onPress }) => (
  <Pressable onPress={onPress}>
    <Text style={styles.item}>{item}</Text>
  </Pressable>
)

export default Item

const styles = StyleSheet.create({
  item: {
    padding: 20
  }
})
