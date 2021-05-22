import React, { useState } from 'react'
import {
  Pressable,
  FlatList,
  View,
  Text,
  StyleSheet
} from 'react-native'

import SearchBox from '../components/SearchBox'
import useStore from '../store'
import Item from '../components/Item'

const EstateNameInputScreen = ({ navigation }) => {
  const [text, setText] = useState('')
  const {
    estateName,
    estateNames,
    setEstateName
  } = useStore()

  const filteredEstateNames = estateNames.filter(name =>
    name.includes(text)
  )

  const onPress = () =>
    navigation.navigate('CreateListingScreen')

  return (
    <View style={styles.container}>
      <View style={styles.searchboxContainer}>
        <SearchBox
          text={text}
          setText={setText}
          placeholder='请输入小区名'
          margin={10}
          padding={10}
          height={30}
          autoFocus={true}
        />
        <Pressable onPress={onPress}>
          <Text style={styles.text}>取消</Text>
        </Pressable>
      </View>
      <FlatList
        keyboardShouldPersistTaps='handled'
        data={filteredEstateNames}
        renderItem={({ item }) => (
          <Item
            item={item}
            onPress={() => {
              setEstateName(item)
              navigation.navigate('CreateListingScreen')
            }}
          />
        )}
        keyExtractor={(item, idx) => item + idx}
      />
    </View>
  )
}

export default EstateNameInputScreen

const styles = StyleSheet.create({
  container: {},
  searchboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10
  },
  text: {
    color: 'dodgerblue',
    fontSize: 18
  }
})
