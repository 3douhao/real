import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DescriptionBox = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description:</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default DescriptionBox

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  }
})
