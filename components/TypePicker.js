import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SegmentedPicker from 'react-native-segmented-picker'
import useStore from '../store'

const FloorPicker = ({ visible, setVisible }) => {
  const pickerRef = useRef()
  const { type, setType } = useStore()

  const onCancel = () => setVisible(false)
  const onConfirm = selections => {
    setType(selections.type)
    setVisible(false)
  }

  const array = [
    '普通住宅',
    '公寓',
    '别墅',
    '平房',
    '商住两用楼',
    '四合院',
    '写字楼',
    '商铺',
    '厂房库房',
    '其他'
  ]

  return (
    <SegmentedPicker
      ref={pickerRef}
      visible={visible}
      onCancel={onCancel}
      onConfirm={onConfirm}
      confirmText='确定'
      options={[
        {
          key: 'type',
          items: array.map(value => ({
            label: value,
            value: value
          }))
        }
      ]}
    />
  )
}

export default FloorPicker

const styles = StyleSheet.create({})
