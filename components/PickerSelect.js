// This is the customrized picker select component based on RNPickerSelect

import { Ionicons } from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select'
import React from 'react'

const PickerSelect = () => {
  return (
    <RNPickerSelect
      Icon={() => (
        <Ionicons
          name='chevron-down'
          size={24}
          color='black'
        />
      )}
      style={{
        inputIOS: {
          fontSize: 20,
          borderRadius: 5,
          height: 50
        },
        iconContainer: {
          marginRight: 10
        },
        placeholder: {
          color: 'dodgerblue',
          fontSize: 20
        },
        inputIOSContainer: {
          alignItems: 'center',
          flexDirection: 'row',
          borderColor: 'dodgerblue',
          marginHorizontal: 10,
          paddingLeft: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginVertical: 5
        }
      }}
      placeholder={{
        label: 'Choose your city',
        value: null
      }}
      onValueChange={value => {
        console.log(value)
      }}
      items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' }
      ]}
    />
  )
}

export default PickerSelect
