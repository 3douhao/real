import React, { useState } from 'react'
import {
  Keyboard,
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import FloorPickers from '../components/FloorPickers'
import useStore from '../store'
import EstateNameInputScreen from './EstateNameInputScreen'
import LayoutPickers from '../components/LayoutPickers'

const CreateListingScreen = ({ navigation }) => {
  const [
    layoutPickersVisible,
    setLayoutPickersVisible
  ] = useState(false)
  const [
    floorPickersVisible,
    setFloorPickersVisible
  ] = useState(false)
  const {
    city,
    estateName,
    layout,
    area,
    setArea,
    floor,
    totalFloors
  } = useStore()

  const openLayoutPickers = () => {
    setLayoutPickersVisible(true)
  }

  const openFloorPickers = () => {
    setFloorPickersVisible(true)
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
            onPress={openLayoutPickers}
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
        {layoutPickersVisible ? (
          <LayoutPickers
            visible={layoutPickersVisible}
            setVisible={setLayoutPickersVisible}
          />
        ) : null}
        <View style={styles.itemContainer}>
          <Text style={styles.text}>面积</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='请输入'
              value={area}
              onChangeText={setArea}
              keyboardType='numeric'
            />
            <Text style={styles.text}>m²</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>楼层</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={openFloorPickers}
          >
            {floor ? (
              <Text style={styles.text}>{floor}</Text>
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
        {floorPickersVisible ? (
          <FloorPickers
            visible={floorPickersVisible}
            setVisible={setFloorPickersVisible}
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
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  textInput: {
    fontSize: 20,
    marginRight: 5
  }
})
