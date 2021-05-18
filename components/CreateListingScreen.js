import React, { useState } from 'react'
import {
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import useStore from '../store'

const CreateListingScreen = ({ navigation }) => {
  const { city } = useStore()

  const toCitiesListScreen = () => {
    navigation.navigate('CitiesListScreen')
  }

  return (
    <SafeAreaView>
      <View style={styles.itemsContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>城市</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={toCitiesListScreen}
          >
            {city ? (
              <Text style={styles.city}>{city}</Text>
            ) : (
              <Text style={styles.placeholder}>请选择</Text>
            )}
            <Ionicons
              name='chevron-forward'
              size={24}
              color='black'
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CreateListingScreen

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  itemsContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20
  },
  placeholder: {
    fontSize: 20,
    color: 'lightgray'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  city: {
    fontSize: 20
  }
})
