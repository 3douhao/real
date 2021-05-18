import React, { useState } from 'react'
import {
  Keyboard,
  FlatList,
  Pressable,
  TextInput,
  View,
  Text,
  StyleSheet
} from 'react-native'
import AppSafeAreaView from './AppSafeAreaView'
import { Ionicons } from '@expo/vector-icons'

import useStore from '../store'

const Item = ({ item, onPress }) => (
  <Pressable onPress={onPress}>
    <Text style={styles.item}>{item}</Text>
  </Pressable>
)

const CitiInputScreen = ({ navigation }) => {
  const { city, cities, getCity } = useStore()
  const [text, setText] = useState('')

  const cityNames = cities.reduce(
    (accu, curr) => accu.concat(curr.data),
    []
  )

  const filteredCities = cityNames.filter(city =>
    city.includes(text)
  )
  const onChangeText = value => setText(value)

  const onPress = () =>
    navigation.navigate('CitiesListScreen')
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name='search' size={24} color='gray' />
          <TextInput
            placeholder='城市'
            placeholderTextColor='gray'
            style={styles.textInput}
            value={text}
            onChangeText={onChangeText}
            autoFocus={true}
          />
        </View>
        <Pressable onPress={onPress}>
          <Text style={styles.text}>取消</Text>
        </Pressable>
      </View>
      {text ? (
        <FlatList
          data={filteredCities}
          // the following line is needed to select the city in one go. Otherwise the city won't respond to the first tap.
          keyboardShouldPersistTaps='handled'
          renderItem={({ item }) => (
            <Item
              item={item}
              onPress={() => {
                navigation.navigate('CreateListingScreen')
                getCity(item)
              }}
            />
          )}
          keyExtractor={(item, idx) => item + idx}
        />
      ) : null}
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
  textInput: {
    fontSize: 20,
    flex: 1
  },
  text: { color: 'dodgerblue' },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#f8f8f8',
    fontSize: 20,
    color: 'gray',
    padding: 10
  },
  item: {
    padding: 20
  }
})
