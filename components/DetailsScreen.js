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

import Contact from './Contact'
import InfoBox from './InfoBox'
import DescriptionBox from './DescriptionBox'

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
  year = 2000,
  description = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  '
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
        <DescriptionBox description={description} />
        <Contact telephone='555-555-5555' />
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
  map: {
    width: Dimensions.get('window').width,
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
