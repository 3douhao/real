import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InfoBox = ({
  title,
  location,
  name,
  type,
  facing,
  floor,
  renovation,
  year,
  area,
  layout,
  price
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.prop}>Location</Text>
          <Text style={styles.text}>{location}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.prop}>Name</Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.prop}>Type</Text>
          <Text style={styles.text}>{type}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.prop}>Facing</Text>
          <Text style={styles.text}>{facing}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.prop}>Floor</Text>
          <Text style={styles.text}>{floor}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.prop}>Renovation</Text>
          <Text style={styles.text}>{renovation}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.prop}>Year</Text>
          <Text style={styles.text}>{year}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.prop}>Area</Text>
          <Text style={styles.text}>{area}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.prop}>Layout</Text>
          <Text style={styles.text}>{layout}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.prop}>Price</Text>
          <Text style={styles.text}>{price}</Text>
        </View>
      </View>
    </View>
  )
}

export default InfoBox

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10
  },
  text: {
    fontSize: 15,
    flex: 1
  },
  title: {
    fontSize: 30,
    marginHorizontal: 10,
    marginVertical: 10
  },
  prop: {
    color: 'gray',
    marginRight: 5
  },
  textContainer: {
    flexDirection: 'row',
    width: '50%',
    marginVertical: 2,
    alignItems: 'center'
  }
})
