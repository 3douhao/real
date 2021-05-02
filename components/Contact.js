import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

const Contact = ({ telephone }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Feather name='phone' size={24} color='black' />
        <Text style={styles.telephone}>{telephone}</Text>
      </View>
      <View style={styles.flagContainer}>
        <Ionicons
          name='ios-flag-outline'
          size={24}
          color='black'
        />
        <Text style={styles.report}>Report Agent</Text>
      </View>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  text: {
    fontSize: 20
  },
  subContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  telephone: {
    fontSize: 18
  },
  report: {
    fontSize: 10
  },
  flagContainer: {
    alignItems: 'center',
    paddingHorizontal: 5
  }
})
