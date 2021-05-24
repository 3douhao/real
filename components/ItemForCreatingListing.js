import React from 'react'
import {
  Pressable,
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ItemForCreatingListing = ({
  onPress,
  label,
  ChineseText
}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{ChineseText}</Text>
      <Pressable
        style={styles.iconContainer}
        onPress={onPress}
      >
        {label ? (
          <Text style={styles.text}>{label}</Text>
        ) : (
          <Text style={styles.placeholder}>请选择</Text>
        )}
        <Ionicons
          name='chevron-forward'
          size={24}
          color='black'
        />
      </Pressable>
    </View>
  )
}

export default ItemForCreatingListing

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  },
  placeholder: {
    fontSize: 20,
    color: 'lightgray'
  }
})
