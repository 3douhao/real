import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBox = ({
  flex = 0,
  autoFocus,
  borderWidth,
  marginTop = 0,
  height,
  backgroundColor = 'white',
  editable = 'true',
  margin,
  padding,
  placeholder,
  setText,
  text
}) => {
  const styles = StyleSheet.create({
    inputContainer: {
      alignItems: 'center',
      borderColor: 'gray',
      borderRadius: 5,
      borderWidth: borderWidth,
      flex: flex,
      marginTop: marginTop,
      flexDirection: 'row',
      marginHorizontal: margin,
      paddingHorizontal: padding
    },
    input: {
      flex: 1,
      paddingHorizontal: padding,
      fontSize: 20,
      height: height,
      backgroundColor: 'white',
      borderWidth: 0,
      backgroundColor: backgroundColor
    }
  })
  const onChangeText = value => setText(value)
  return (
    <View style={styles.inputContainer}>
      <Ionicons name='search' size={24} color='lightgray' />
      <TextInput
        editable={editable}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        autoFocus={autoFocus}
      />
    </View>
  )
}

export default SearchBox
