import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text
} from 'react-native'
import Card from '../components/Card'
import SelectCity from '../components/SelectCity'
import Map from '../components/Map'
import CitiesModal from '../components/CitiesModal'

import SearchBox from '../components/SearchBox'
import AppSafeAreaView from '../components/AppSafeAreaView'

export default function HomeScreen({ navigation }) {
  const [text, setText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const onChangeText = value => {
    setText(value)
  }
  const onPress = screen => {
    navigation.navigate(screen)
  }
  return (
    <AppSafeAreaView>
      <CitiesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.location}>
        <SelectCity setModalVisible={setModalVisible} />
        <Map navigation={navigation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Rent' />
        <Button
          title='Sell'
          onPress={() => onPress('CreateListingScreen')}
        />
      </View>
      <SearchBox
        placeholder='Start searching here'
        setText={setText}
        padding={10}
        margin={10}
        height={40}
        text={text}
        autoFocus={false}
      />
      <View style={styles.cardContainer}>
        <Card />
        <Card />
      </View>
      <Button
        title='go to details screen'
        onPress={() => onPress('DetailsScreen')}
      />
    </AppSafeAreaView>
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
  },
  location: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
