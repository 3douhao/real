import React, { useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SegmentedPicker from 'react-native-segmented-picker'

import useStore from '../store'

const array = [
  '南北',
  '东西',
  '东北',
  '东南',
  '西北',
  '西南',
  '东',
  '南',
  '西',
  '北'
]

const FacingPicker = ({ visible, setVisible }) => {
  const { setFacing } = useStore()
  const pickerRef = useRef()
  const onConfirm = selections => {
    setFacing(selections.facing)
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
          key: 'facing',
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
