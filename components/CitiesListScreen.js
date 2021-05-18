import React from 'react'
import {
  Text,
  Pressable,
  SectionList,
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import AppSafeAreaView from './AppSafeAreaView'
import { Ionicons } from '@expo/vector-icons'

const cities = [
  {
    title: 'A',
    data: ['Water', 'Coke', 'Beer']
  },
  {
    title: 'B',
    data: [
      '上海',
      '南京',
      '北京',
      '广州',
      '深圳',
      '无锡',
      '柳州',
      '贵州',
      '太原',
      '青岛',
      '大连',
      '合肥',
      '汉口',
      '温州',
      '郑州',
      '南阳',
      '杭州'
    ]
  },
  {
    title: 'C',
    data: [
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen',
      'Beijing',
      'Shanghai',
      'Guangzhou',
      'Shenzhen'
    ]
  }
]

const Item = ({ item }) => (
  <Pressable onPress={() => console.log('a todo function')}>
    <Text style={styles.item}>{item}</Text>
  </Pressable>
)

const CitiesListScreen = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name='search' size={24} color='gray' />
          <TextInput
            placeholder='城市'
            placeholderTextColor='gray'
            style={styles.textInput}
          />
        </View>
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
  textInput: {
    fontSize: 20
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
    padding: 10
  }
})
