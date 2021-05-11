import React, { useState } from 'react'
import {
  TextInput,
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

import CitiesList from '../components/CitiesList'

const CitiesModal = ({
  navigation,
  modalVisible,
  setModalVisible
}) => {
  const onPress = () => {
    setModalVisible(!modalVisible)
  }
  return (
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
        <View style={styles.searchBox}>
          <Ionicons
            name='search-outline'
            size={24}
            color='gray'
          />
          <TextInput
            placeholder='input a city'
            style={styles.inputBox}
          />
        </View>
      </View>
      <CitiesList />
    </Modal>
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
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  inputBox: {
    marginHorizontal: 5
  },
  searchBox: {
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row'
  }
})
