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
import EstateNameInputScreen from './EstateNameInputScreen'
import Pickers from '../components/Pickers'

const CreateListingScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false)
  const { city, estateName, layout } = useStore()

  const openPicker = () => {
    setVisible(true)
  }

  const toCitiesListScreen = () => {
    navigation.navigate('CitiesListScreen')
  }

  const toEstateNameInputScreen = () => {
    navigation.navigate('EstateNameInputScreen')
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
        <View style={styles.itemContainer}>
          <Text style={styles.text}>小区</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={toEstateNameInputScreen}
          >
            {estateName ? (
              <Text style={styles.text}>{estateName}</Text>
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
        <View style={styles.itemContainer}>
          <Text style={styles.text}>户型</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={openPicker}
          >
            {layout ? (
              <Text style={styles.text}>{layout}</Text>
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
        {visible ? (
          <Pickers
            visible={visible}
            setVisible={setVisible}
          />
        ) : null}
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
  }
})
