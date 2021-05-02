import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  View,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native'
import Card from '../components/Card'

export default function MessageScreen({ navigation }) {
  const [text, setText] = useState('')
  const onChangeText = value => {
    setText(value)
  }
  const onPress = () => {
    navigation.navigate('DetailsScreen')
  }
  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button title='Rent' />
        <Button title='Sell' />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name='search' size={24} color='gray' />
        <TextInput
          value={text}
          onChangeText={onChangeText}
          placeholder='Search'
          style={styles.input}
        />
      </View>
      <View style={styles.cardContainer}>
        <Card />
        <Card />
      </View>
      <Button
        title='go to details screen'
        onPress={onPress}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 10,
    flex: 1
  },
  buttonContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  inputContainer: {
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20
  }
})
