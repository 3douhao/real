import React from 'react'

import EstateNameInput from '../components/EstateNameInput'

const EstateNameInputScreen = ({ navigation }) => (
  <EstateNameInput
    navigation={navigation}
    forwoardScreen='CreateListingScreen'
    backScreen='CreateListingScreen'
  />
)

export default EstateNameInputScreen
