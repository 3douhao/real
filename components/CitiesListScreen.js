import React, { useState } from 'react'
import {
  Text,
  Pressable,
  SectionList,
  View,
  StyleSheet
} from 'react-native'
import AppSafeAreaView from './AppSafeAreaView'
import { Ionicons } from '@expo/vector-icons'

import useStore from '../store'

const Item = ({ item }) => (
  <Pressable onPress={() => console.log('a todo function')}>
    <Text style={styles.item}>{item}</Text>
  </Pressable>
)

const CitiesListScreen = ({ navigation }) => {
  const { cities } = useStore()

  const onPress = () =>
    navigation.navigate('CitiInputScreen')

  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <Pressable
          style={styles.iconContainer}
          onPress={onPress}
        >
          <Ionicons name='search' size={24} color='gray' />
          <Text style={styles.text}>城市</Text>
        </Pressable>
      </View>
      <SectionList
        sections={cities}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        keyExtractor={(item, idx) => item + idx}
      />
    </AppSafeAreaView>
  )
}

export default CitiesListScreen

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'gray'
  },
  iconContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '90%',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    borderRadius: 5
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
