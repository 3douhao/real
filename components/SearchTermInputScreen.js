import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBox from './SearchBox'
import AppSafeAreaView from './AppSafeAreaView'

const SearchTermInputScreen = () => {
  const [text, setText] = useState('')
  const onChangeText = value => {
    setText(value)
  }
  return (
    <AppSafeAreaView>
      <Text>hello search here</Text>
    </AppSafeAreaView>
  )
}

export default SearchTermInputScreen

const styles = StyleSheet.create({})
