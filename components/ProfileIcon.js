import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native'
import { Fontisto } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width

const ProfileIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Fontisto
        name='male'
        size={windowWidth / 6}
        color='white'
      />
    </View>
  )
}

export default ProfileIcon

const styles = StyleSheet.create({
  iconContainer: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: windowWidth / 8,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
