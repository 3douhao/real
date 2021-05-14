import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

const AppSafeAreaView = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      {children}
    </SafeAreaView>
  )
}

export default AppSafeAreaView
