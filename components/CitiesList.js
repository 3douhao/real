import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SectionList
} from 'react-native'

const DATA = [
  {
    title: 'Current City',
    data: ['Location Error']
  },
  {
    title: 'Hot Cities',
    data: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen']
  },
  {
    title: 'A',
    data: ['Water', 'Coke', 'Beer']
  },
  {
    title: 'B',
    data: ['Cheese Cake', 'Ice Cream']
  }
]

const Item = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.item}>{item}</Text>
  </View>
)

const CitiesList = () => {
  return (
    <SectionList
      sections={DATA}
      renderItem={({ item }) => <Item item={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
      keyExtractor={(item, idx) => item + idx}
    />
  )
}

export default CitiesList

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dcdcdc',
    fontSize: 18,
    color: 'gray',
    padding: 10
  },
  item: {
    padding: 10
  },
  container: {}
})
