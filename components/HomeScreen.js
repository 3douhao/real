import React, { useState } from 'react'
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  MaterialIcons
} from '@expo/vector-icons'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Pressable
} from 'react-native'

import Card from '../components/Card'
import SelectCity from '../components/SelectCity'
import Map from '../components/Map'
import CitiesModal from '../components/CitiesModal'
import AppSafeAreaView from '../components/AppSafeAreaView'

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const onPress = screen => {
    navigation.navigate(screen)
  }

  return (
    <AppSafeAreaView>
      <CitiesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.container}>
        <View style={styles.innerTopContainer}>
          <View style={styles.withModalContainer}>
            <SelectCity setModalVisible={setModalVisible} />
            <Text style={styles.bar}>|</Text>
            <Pressable
              style={styles.searchBoxContainer}
              onPress={() =>
                onPress('SearchTermInputScreen')
              }
            >
              <Ionicons
                name='search'
                size={24}
                color='lightgray'
              />
              <Text style={styles.placeholder}>搜小区</Text>
            </Pressable>
          </View>
          <Map navigation={navigation} />
        </View>
        <View style={styles.pressableContainer}>
          <Pressable style={styles.pressable}>
            <MaterialIcons
              name='house'
              size={30}
              color='black'
            />
            <Text style={styles.text}>二手房</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <MaterialIcons
              name='apartment'
              size={30}
              color='black'
            />
            <Text style={styles.text}>租房</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <FontAwesome5
              name='building'
              size={30}
              color='black'
            />
            <Text style={styles.text}>写字楼</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <Entypo name='shop' size={30} color='black' />
            <Text style={styles.text}>商铺</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <FontAwesome5
              name='warehouse'
              size={30}
              color='black'
            />
            <Text style={styles.text}>厂房库房</Text>
          </Pressable>
        </View>
      </View>

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
  pressableContainer: {
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
  innerTopContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchBoxContainer: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  withModalContainer: {
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5
  },
  bar: {
    fontSize: 20,
    color: 'lightgray',
    marginLeft: 10
  },
  pressable: {
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    marginVertical: 5
  },
  placeholder: {
    fontSize: 18,
    color: 'lightgray',
    marginLeft: 5
  }
})
