import React, { useState } from 'react'
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Switch,
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Header } from '@react-navigation/stack'

import FloorPicker from '../components/FloorPicker'
import useStore from '../store'
import EstateNameInputScreen from '../components/EstateNameInputScreen'
import LayoutPicker from '../components/LayoutPicker'
import FacingPicker from '../components/FacingPicker'
import DecorationPicker from '../components/DecorationPicker'
import ItemForCreatingListing from '../components/ItemForCreatingListing'
import TypePicker from '../components/TypePicker'

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
  const [
    decorationPickerVisible,
    setDecorationPickerVisible
  ] = useState(false)
  const [
    typePickerVisible,
    setTypePickerVisible
  ] = useState(false)
  const [
    isElevatorEnabled,
    setIsElevatorEnabled
  ] = useState(true)
  const [isGenderEnabled, setIsGenderEnabled] = useState(
    true
  )
  const [
    isTradingTypeEnabled,
    setIsTradingTypeEnabled
  ] = useState(true)

  const toggleElevatorSwitch = () =>
    setIsElevatorEnabled(prev => !prev)

  const toggleGenderSwitch = () =>
    setIsGenderEnabled(prev => !prev)

  const toggleTradingTypeSwitch = () =>
    setIsTradingTypeEnabled(prev => !prev)

  const {
    city,
    estateName,
    layout,
    area,
    setArea,
    floor,
    totalFloors,
    facing,
    decoration,
    type,
    elevator,
    setElevator,
    price,
    setPrice,
    name,
    setName,
    gender,
    setGender,
    tradingType,
    setTradingType
  } = useStore()

  const openLayoutPicker = () => {
    setLayoutPickerVisible(true)
  }

  const openFloorPicker = () => {
    setFloorPickerVisible(true)
  }

  const openFacingPicker = () =>
    setFacingPickerVisible(true)

  const openDecorationPicker = () =>
    setDecorationPickerVisible(true)

  const openTypePicker = () => setTypePickerVisible(true)

  const onElevatorValueChange = () => {
    toggleElevatorSwitch()
    isElevatorEnabled
      ? setElevator('??????')
      : setElevator('???')
  }

  const onGenderValueChange = () => {
    toggleGenderSwitch()
    isGenderEnabled ? setGender('??????') : setGender('??????')
  }

  const onTradingTypeChange = () => {
    toggleTradingTypeSwitch()
    isTradingTypeEnabled
      ? setTradingType('??????')
      : setTradingType('??????')
  }

  const toCitiesListScreen = () => {
    navigation.navigate('CitiesListScreen')
  }

  const toEstateNameInputScreen = () => {
    navigation.navigate('EstateNameInputScreen')
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={100}
        style={styles.keyboard}
      >
        <ScrollView
          style={styles.itemsContainer}
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps='never'
        >
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={toCitiesListScreen}
            >
              {city ? (
                <Text style={styles.city}>{city}</Text>
              ) : (
                <Text style={styles.placeholder}>
                  ?????????
                </Text>
              )}
              <Ionicons
                name='chevron-forward'
                size={24}
                color='black'
              />
            </Pressable>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>?????????????????????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={toEstateNameInputScreen}
            >
              {estateName ? (
                <Text style={styles.text}>
                  {estateName}
                </Text>
              ) : (
                <Text style={styles.placeholder}>
                  ?????????
                </Text>
              )}
              <Ionicons
                name='chevron-forward'
                size={24}
                color='black'
              />
            </Pressable>
          </View>
          <View style={styles.separator}></View>

          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>????????????</Text>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ true: 'dodgerblue' }}
                ios_backgroundColor='green'
                onValueChange={onTradingTypeChange}
                thumbColor='white'
                value={isTradingTypeEnabled}
              />
              <Text style={styles.text}>{tradingType}</Text>
            </View>
          </View>
          <View style={styles.separator}></View>

          <View style={styles.itemContainer}>
            <Text style={styles.text}>????????????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={openTypePicker}
            >
              {type ? (
                <Text style={styles.text}>{type}</Text>
              ) : (
                <Text style={styles.placeholder}>
                  ?????????
                </Text>
              )}
              <Ionicons
                name='chevron-forward'
                size={24}
                color='black'
              />
            </Pressable>
          </View>
          {typePickerVisible ? (
            <TypePicker
              visible={typePickerVisible}
              setVisible={setTypePickerVisible}
            />
          ) : null}
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={openLayoutPicker}
            >
              {layout ? (
                <Text style={styles.text}>{layout}</Text>
              ) : (
                <Text style={styles.placeholder}>
                  ?????????
                </Text>
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
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <View style={styles.areaInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder='?????????'
                value={area}
                onChangeText={setArea}
                returnKeyType='done'
                keyboardType='numbers-and-punctuation'
              />
              <Text style={styles.text}>m??</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={openFloorPicker}
            >
              {floor ? (
                <Text style={styles.text}>{floor}</Text>
              ) : (
                <Text style={styles.placeholder}>
                  ?????????
                </Text>
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
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={openFacingPicker}
            >
              {facing ? (
                <Text style={styles.text}>{facing}</Text>
              ) : (
                <Text style={styles.placeholder}>
                  ?????????
                </Text>
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
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={openDecorationPicker}
            >
              {decoration ? (
                <Text style={styles.text}>
                  {decoration}
                </Text>
              ) : (
                <Text style={styles.placeholder}>
                  ?????????
                </Text>
              )}
              <Ionicons
                name='chevron-forward'
                size={24}
                color='black'
              />
            </Pressable>
          </View>
          {decorationPickerVisible ? (
            <DecorationPicker
              visible={decorationPickerVisible}
              setVisible={setDecorationPickerVisible}
            />
          ) : null}
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ true: 'dodgerblue' }}
                onValueChange={onElevatorValueChange}
                thumbColor='white'
                value={isElevatorEnabled}
              />
              <Text style={styles.text}>{elevator}</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>
              {tradingType === '??????' ? '??????' : '??????'}
            </Text>
            <View style={styles.priceInputContainer}>
              <TextInput
                returnKeyType='done'
                keyboardType='numbers-and-punctuation'
                placeholder='?????????'
                value={price}
                onChangeText={setPrice}
                maxLength={5}
                style={styles.text}
              />
              <Text style={styles.text}>
                {tradingType === '??????' ? '???' : '???'}
              </Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <Pressable
              style={styles.iconContainer}
              onPress={() => {}}
            >
              <Text style={styles.placeholder}>
                ??????????????????????????????
              </Text>
              <Ionicons
                name='chevron-forward'
                size={24}
                color='black'
              />
            </Pressable>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>?????????</Text>
            <TextInput
              returnKeyType='done'
              keyboardType='numbers-and-punctuation'
              placeholder='?????????'
              value={name}
              onChangeText={setName}
              maxLength={5}
              style={styles.text}
            />
          </View>
          <View style={styles.separator}></View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>??????</Text>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{
                  true: 'dodgerblue'
                }}
                ios_backgroundColor='hotpink'
                onValueChange={onGenderValueChange}
                thumbColor='white'
                value={isGenderEnabled}
              />
              <Text style={styles.text}>{gender}</Text>
            </View>
          </View>
          <View style={styles.button}>
            <Button title='??????' color='white' />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default CreateListingScreen

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20
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
  areaInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  textInput: {
    fontSize: 20,
    marginRight: 5
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between'
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    justifyContent: 'space-between'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0'
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center'
  }
})
