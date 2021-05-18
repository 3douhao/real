import React from 'react'
import {
  TextInput,
  View,
  Text,
  StyleSheet
} from 'react-native'
import AppSafeAreaView from './AppSafeAreaView'
import { Ionicons } from '@expo/vector-icons'

const CitiInputScreen = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name='search' size={24} color='gray' />
          <TextInput
            placeholder='城市'
            placeholderTextColor='gray'
            style={styles.textInput}
          />
        </View>
        <Text style={styles.text}>取消</Text>
      </View>
    </AppSafeAreaView>
  )
}

export default CitiInputScreen

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  textInput: { fontSize: 20 },
  text: { color: 'dodgerblue' },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})
