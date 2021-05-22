import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AppSafeAreaView from '../components/AppSafeAreaView'
import { WebView } from 'react-native-webview'

const WebViewScreen = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <WebView
      style={{
        marginTop: 30,
        borderColor: 'red',
        borderWidth: 2
      }}
      source={{ uri: 'https://www.google.com' }}
    />
  )
}

export default WebViewScreen

const styles = StyleSheet.create({})
