import React, { useState } from 'react'
import {
  Modal,
  Pressable,
  Button,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CheckBox from 'react-native-check-box'

import useStore from '../store'
import AppSafeAreaView from './AppSafeAreaView'

const LogInModal = ({
  logInModalVisible,
  setLogInModalVisible
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { cellNumber, setCellNumber } = useStore()
  return (
    <Modal
      animationType='slide'
      visible={logInModalVisible}
      style={styles.modal}
    >
      <AppSafeAreaView>
        <ScrollView
          keyboardDismissMode='interactive'
          style={styles.scrollview}
        >
          <Pressable
            onPress={() => setLogInModalVisible(false)}
          >
            <Ionicons
              name='close'
              size={30}
              color='lightgray'
              style={styles.icon}
            />
          </Pressable>
          <View style={styles.textContainer}>
            <Text style={styles.text}>欢迎来到房东网</Text>
            <Text>无中介，好舒心</Text>
            <Text style={styles.cell}>
              {isFocused ? '手机号' : null}
            </Text>
            <TextInput
              placeholder='请输入手机号'
              value={cellNumber}
              onFocus={() => setIsFocused(true)}
              onChangeText={value => setCellNumber(value)}
              height={50}
              borderBottomWidth={1}
              borderColor='lightgray'
              keyboardType='number-pad'
              returnKeyType='done'
            ></TextInput>
            <CheckBox
              style={styles.checkbox}
              onClick={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
              rightText='我已阅读并同意相关协议'
              checkBoxColor='dodgerblue'
              uncheckedCheckBoxColor='lightgray'
            />
            <Pressable style={styles.pressable}>
              <Text style={styles.textAsButton}>
                获取验证码
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </AppSafeAreaView>
    </Modal>
  )
}

export default LogInModal

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,
    marginHorizontal: 30
  },
  text: {
    fontSize: 30,
    marginVertical: 20
  },
  icon: {
    marginHorizontal: 10
  },
  checkbox: {
    flex: 1,
    marginVertical: 10
  },
  cell: {
    color: 'lightgray',
    marginTop: 50
  },
  scrollview: {
    height: '100%'
  },
  button: {
    backgroundColor: 'pink',
    width: 300
  },
  pressable: {
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    height: 40,
    justifyContent: 'center'
  },
  textAsButton: {
    color: 'white',
    fontSize: 20
  },
  modal: {
    marginTop: 60
  }
})
