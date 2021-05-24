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

import FloorPicker from '../components/FloorPicker'
import useStore from '../store'
import EstateNameInputScreen from './EstateNameInputScreen'
import LayoutPicker from '../components/LayoutPicker'
import FacingPicker from './FacingPicker'

const CreateListingScreen = ({ navigation }) => {
  const [
    layoutPickerVisible,
    setLayoutPickerVisible
  ] = useState(false)
  const [
    floorPickerVisible,
    setFloorPickerVisible
  ] = useState(false)
  const [
    facingPickerVisible,
    setFacingPickerVisible
  ] = useState(false)

  const {
    city,
    estateName,
    layout,
    area,
    setArea,
    floor,
    totalFloors,
    facing
  } = useStore()

  const openLayoutPicker = () => {
    setLayoutPickerVisible(true)
  }

  const openFloorPicker = () => {
    setFloorPickerVisible(true)
  }

  const openFacingPicker = () =>
    setFacingPickerVisible(true)

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
            onPress={openLayoutPicker}
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
        {layoutPickerVisible ? (
          <LayoutPicker
            visible={layoutPickerVisible}
            setVisible={setLayoutPickerVisible}
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
              returnKeyType='done'
              keyboardType='numbers-and-punctuation'
            />
            <Text style={styles.text}>m²</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>楼层</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={openFloorPicker}
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
        {floorPickerVisible ? (
          <FloorPicker
            visible={floorPickerVisible}
            setVisible={setFloorPickerVisible}
          />
        ) : null}
        <View style={styles.itemContainer}>
          <Text style={styles.text}>朝向</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={openFacingPicker}
          >
            {facing ? (
              <Text style={styles.text}>{facing}</Text>
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
        {facingPickerVisible ? (
          <FacingPicker
            visible={facingPickerVisible}
            setVisible={setFacingPickerVisible}
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
