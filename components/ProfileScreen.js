import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable
} from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import {
  FontAwesome5,
  FontAwesome
} from '@expo/vector-icons'

import LogInModal from '../components/LogInModal'
import useStore from '../store'
import Constants from 'expo-constants'
import ProfileIcon from '../components/ProfileIcon'

export default function ProfileScreen({ navigation }) {
  const [
    logInModalVisible,
    setLogInModalVisible
  ] = useState(false)
  const { loggedIn, cellNumber } = useStore()
  const onPress = () => {
    if (!loggedIn) {
      setLogInModalVisible(true)
    }
  }
  return (
    <AppSafeAreaView>
      <View style={styles.topRowContainer}>
        <ProfileIcon />
        <Pressable onPress={onPress}>
          {loggedIn ? (
            <Text style={styles.text}>{cellNumber}</Text>
          ) : (
            <Text style={styles.text}>登陆/注册</Text>
          )}
        </Pressable>
      </View>
      <View style={styles.secondContainer}>
        <Pressable style={styles.pressable}>
          <FontAwesome5
            name='history'
            size={24}
            color='dodgerblue'
          />
          <Text>浏览记录</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <FontAwesome name='heart' size={24} color='red' />
          <Text>收藏</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <FontAwesome
            name='file-text'
            size={24}
            color='green'
          />
          <Text>我的发布</Text>
        </Pressable>
      </View>
      {logInModalVisible ? (
        <LogInModal
          setLogInModalVisible={setLogInModalVisible}
          logInModalVisible={logInModalVisible}
        />
      ) : null}
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
  topRowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'dodgerblue'
  },
  map: {
    width: 400,
    height: 400
  },
  text: {
    fontSize: 25
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    marginVertical: 20,
    alignItems: 'center'
  },
  pressable: {
    alignItems: 'center',
    height: 45,
    justifyContent: 'space-between'
  }
})
