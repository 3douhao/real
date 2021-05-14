import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
  ScrollView,
  Picker,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput
} from 'react-native'

import PickerSelect from '../components/PickerSelect'

const Select = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Input the title here'
        />
        <PickerSelect />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Select

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'dodgerblue',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    fontSize: 20
  }
})
