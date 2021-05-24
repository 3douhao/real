import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import { Picker } from '@react-native-picker/picker'

import SegmentedPicker from 'react-native-segmented-picker'
import useStore from '../store'

const FloorPicker = ({ visible, setVisible }) => {
  const pickerRef = useRef()
  const { floor, setFloor } = useStore()
  const [n, setN] = useState('1')

  const onCancel = () => setVisible(false)
  const onConfirm = selections => {
    setFloor(
      `${selections.floor}/${selections.totalFloors}`
    )
    setVisible(false)
  }

  const makeArray = () => {
    const arr = [-9, -8, -7, -6, -5, -4, -3, -2, -1]
    for (let i = 1; i <= 99; i++) {
      arr.push(i)
    }
    return arr
  }
  const array = makeArray()
  const makeArray2 = () => {
    let arr = []
    for (let i = Number(n); i <= 99; i++) {
      arr.push(i)
    }
    return arr
  }
  const array2 = makeArray2()

  return (
    <SegmentedPicker
      defaultSelections={{
        floor: '1',
        totalFloors: '共1层'
      }}
      ref={pickerRef}
      visible={visible}
      onValueChange={({ value }) => {
        if (Number(value) < 0) {
          setN('1')
        } else {
          setN(value)
        }
      }}
      onCancel={onCancel}
      onConfirm={onConfirm}
      confirmText='确定'
      options={[
        {
          key: 'floor',
          items: array.map(value => ({
            label: `${value}层`,
            value: `${value}`
          }))
        },
        {
          key: 'totalFloors',
          items: array2.map(value => ({
            label: `共${value}层`,
            value: `${value}`
          }))
        }
      ]}
    />
  )
}

export default FloorPicker

const styles = StyleSheet.create({})
