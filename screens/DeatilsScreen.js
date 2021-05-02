import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is details screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'dodgerblue'
  }
})
