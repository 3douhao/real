import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'

import SearchBox from '../components/SearchBox'
const NewsScreen = () => {
  const [text, setText] = useState('')
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <SearchBox
          placeholder='click to search'
          editable={false}
          setText={setText}
          padding={10}
          margin={0}
          height={80}
          text={text}
          backgroundColor='pink'
          autoFocus={false}
          borderWidth={1}
        />
      </View>
    </AppSafeAreaView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  container: {
    height: 30
  }
})
