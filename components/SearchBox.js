import React, { useState } from 'react'
import {
  TextInput,
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBox = ({
  text,
  setText,
  placeholder,
  margin,
  padding,
  height
}) => {
  const styles = StyleSheet.create({
    inputContainer: {
      borderColor: 'gray',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      paddingHorizontal: padding,
      marginHorizontal: margin
    },
    input: {
      height: height,
      paddingHorizontal: padding,
      flex: 1
    }
  })
  const onChangeText = () => setText(value)
  return (
    <View style={styles.inputContainer}>
      <Ionicons name='search' size={24} color='gray' />
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  )
}

export default SearchBox
