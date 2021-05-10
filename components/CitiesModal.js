import React, { useState } from 'react'
import {
  SafeAreaView,
  Pressable,
  View,
  Text,
  StyleSheet,
  Modal,
  Alert
} from 'react-native'

const CitiesModal = ({
  navigation,
  modalVisible,
  setModalVisible
}) => {
  const onPress = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <View>
      <Modal
        style={styles.modal}
        visible={modalVisible}
        animationType='slide'
        onRequestClose={() =>
          Alert.alert('modal has been closed')
        }
      >
        <View style={styles.container}>
          <Text style={styles.text}>Hello world</Text>
          <Pressable onPress={onPress}>
            <Text style={styles.text}>Hide Modal</Text>
          </Pressable>
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
  container: {
    marginVertical: 50
  },
  modal: {
    backgroundColor: 'red',
    flex: 1
  }
})
