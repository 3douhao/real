import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'

import SearchBox from '../components/SearchBox'
const NewsScreen = () => {
  const [text, setText] = useState('')
  return (
    <AppSafeAreaView>
      <Text>发布房源</Text>
    </AppSafeAreaView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  container: {
    height: 30
  }
})
