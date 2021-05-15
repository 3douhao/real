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

import SearchBox from '../components/SearchBox'
import CitiesListForLocating from './CitiesListForLocating'

const CitiesModal = ({
  navigation,
  modalVisible,
  setModalVisible
}) => {
  const onPress = () => {
    setModalVisible(!modalVisible)
  }
  const [text, setText] = useState('')
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
        <SearchBox
          name='search'
          text={text}
          placeholder='Search your city'
          padding={10}
          margin={10}
          height={30}
          setText={setText}
        />
      </View>
      <CitiesListForLocating />
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
    paddingRight: 30,
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: 'center'
  }
  // inputBox: {
  //   marginHorizontal: 5
  // },
  // searchBox: {
  //   paddingHorizontal: 5,
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   flex: 1,
  //   flexDirection: 'row'
  // }
})
