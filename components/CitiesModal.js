import React, { useState } from 'react'
import {
  Dimensions,
  SafeAreaView,
  Pressable,
  View,
  Text,
  StyleSheet,
  Modal,
  Alert
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'

const CitiesModal = ({
  navigation,
  modalVisible,
  setModalVisible
}) => {
  const onPress = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <View style={styles.modalContainer}>
      <Modal
        visible={modalVisible}
        animationType='slide'
        onRequestClose={() =>
          Alert.alert('modal has been closed')
        }
      >
        <View style={styles.optionsContainer}>
          <Pressable onPress={onPress}>
            <Ionicons
              name='close-outline'
              size={24}
              color='black'
            />
          </Pressable>
          <Text style={styles.text}>Choose A City</Text>
          <Ionicons
            style={styles.icon}
            name='close-outline'
            size={24}
            color='black'
          />
        </View>
      </Modal>
    </View>
  )
}

export default CitiesModal
const styles = StyleSheet.create({
  text: {
    fontSize: 29
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 5,
    // width: '100%',
    alignItems: 'center'
  },
  icon: {
    color: 'white'
  }
})
