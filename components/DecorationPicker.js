import React, { useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SegmentedPicker from 'react-native-segmented-picker'

import useStore from '../store'

const array = ['毛坯', '简单装修', '精装修', '豪华装修']

const FacingPicker = ({ visible, setVisible }) => {
  const { setDecoration } = useStore()
  const pickerRef = useRef()
  const onConfirm = selections => {
    setDecoration(selections.decoration)
    setVisible(false)
  }
  const onCancel = () => setVisible(false)
  return (
    <SegmentedPicker
      ref={pickerRef}
      visible={visible}
      onCancel={onCancel}
      onConfirm={onConfirm}
      confirmText='确定'
      options={[
        {
          key: 'decoration',
          items: array.map(value => ({
            label: value,
            value: value
          }))
        }
      ]}
    />
  )
}

export default FacingPicker

const styles = StyleSheet.create({})
