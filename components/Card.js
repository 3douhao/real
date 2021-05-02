import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Card = ({
  name = 'Central Park',
  area = 200,
  title = 'A good house to live',
  imageUrl = 'https://picsum.photos/id/1006/50/50',
  price = 100,
  tags = [
    'good view',
    'low price',
    'near bus stop',
    'convient',
    '5 rooms',
    '3 bathrooms'
  ]
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {name} | {area} ㎡
        </Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.tagsContainer}>
          {tags.map((tag, idx) => (
            <View key={idx} style={styles.tagContainer}>
              <Text style={styles.tag}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    marginHorizontal: 'auto',
    marginVertical: 10
  },
  infoContainer: {
    marginLeft: 5,
    justifyContent: 'space-evenly'
  },
  tagsContainer: {
    flexDirection: 'row',
    width: '95%',
    flexWrap: 'wrap'
  },
  tagContainer: {
    paddingHorizontal: 2,
    marginHorizontal: 2,
    borderRadius: 1,
    backgroundColor: 'dodgerblue',
    marginVertical: 2
  },
  tag: {
    color: 'white',
    fontSize: 10
  },
  title: {
    fontSize: 15,
    margin: 5
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  }
})
