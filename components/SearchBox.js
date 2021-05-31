import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBox = ({
  autoFocus,
  borderWidth,
  editable,
  height,
  margin,
  padding,
  placeholder,
  pointerEvents,
  setText,
  text
}) => {
  const styles = StyleSheet.create({
    inputContainer: {
      alignItems: 'center',
      borderColor: 'gray',
      borderRadius: 5,
      borderWidth: 1,
      borderWidth: borderWidth,
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: margin,
      paddingHorizontal: padding
    },
    input: {
      height: height,
      flex: 1,
      paddingHorizontal: padding,
      fontSize: 20
    }
  })
  const onChangeText = value => setText(value)
  return (
    <View style={styles.inputContainer}>
      <Ionicons name='search' size={24} color='gray' />
      <TextInput
        editable={editable}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        autoFocus={autoFocus}
        pointerEvents={pointerEvents}
      />
    </View>
  )
}

export default SearchBox
