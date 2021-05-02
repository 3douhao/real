import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'

import InfoBox from './InfoBox'

const windowWidth = Dimensions.get('window').width

const DetailsScreen = ({
  imageUri = `https://picsum.photos/seed/picsum/${windowWidth}/300`,
  title = 'Sell a great house',
  location = 'Downtown',
  name = 'Central Park',
  type = 'residential',
  facing = 'northsouth',
  floor = 5,
  renovation = 'good',
  area = 100,
  layout = '3LDR',
  price = 100,
  year = 2000
}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUri
          }}
        />
        <InfoBox
          title={title}
          location={location}
          name={name}
          type={type}
          facing={facing}
          floor={floor}
          renovation={renovation}
          year={year}
          area={area}
          layout={layout}
          price={price}
        />
        <View style={styles.icons}>
          <Ionicons
            name='share-social-outline'
            size={24}
            color='white'
          />
          <Ionicons
            name='ios-flag-outline'
            size={24}
            color='white'
          />
          <Ionicons
            name='ios-heart-outline'
            size={24}
            color='white'
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  imagesContainer: {
    width: '100%',
    height: 300
  },
  image: {
    width: Number(`${windowWidth}`),
    height: 300
  },
  icons: {
    position: 'absolute',
    justifyContent: 'space-evenly',
    height: 300,
    top: 0,
    right: 20
  }
})
