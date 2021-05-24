import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import { Picker } from '@react-native-picker/picker'

import SegmentedPicker from 'react-native-segmented-picker'
import useStore from '../store'

const LayoutPicker = ({ visible, setVisible }) => {
  const pickerRef = useRef()
  const {
    bedroom,
    livingroom,
    bathroom,
    setBedroom,
    layout,
    setLivingroom,
    setBathroom,
    setLayout
  } = useStore()

  const onCancel = () => setVisible(false)
  const onConfirm = selections => {
    setLayout(
      `${selections.bedroom}${selections.livingroom}${selections.bathroom}}`
    )
    setVisible(false)
  }

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <SegmentedPicker
      ref={pickerRef}
      visible={visible}
      onCancel={onCancel}
      onConfirm={onConfirm}
      confirmText='确定'
      options={[
        {
          key: 'bedroom',
          items: array.slice(1).map(value => ({
            label: `${value}室`,
            value: `${value}室`
          }))
        },
        {
          key: 'livingroom',
          items: array.map(value => ({
            label: `${value}厅`,
            value: `${value}厅`
          }))
        },
        {
          key: 'bathroom',
          items: array.map(value => ({
            label: `${value}卫`,
            value: `${value}卫`
          }))
        }
      ]}
    />
  )
}

export default LayoutPicker

const styles = StyleSheet.create({})
