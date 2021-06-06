import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppSafeAreaView from './AppSafeAreaView'

const ChooseWhatTypeOfListingToCreate = () => {
  return (
    <AppSafeAreaView>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>楼层</Text>
        <Pressable
          style={styles.iconContainer}
          onPress={() => {}}
        >
          {floor ? (
            <Text style={styles.text}>{floor}</Text>
          ) : (
            <Text style={styles.placeholder}>请选择</Text>
          )}
          <Ionicons
            name='chevron-forward'
            size={24}
            color='black'
          />
        </Pressable>
      </View>
      {floorPickerVisible ? (
        <FloorPicker
          visible={floorPickerVisible}
          setVisible={setFloorPickerVisible}
        />
      ) : null}
      <View style={styles.separator}></View>
    </AppSafeAreaView>
  )
}

export default ChooseWhatTypeOfListingToCreate

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  },
  placeholder: {
    fontSize: 20,
    color: 'lightgray'
  }
})
