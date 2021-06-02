import React from 'react'

import EstateNameInput from '../components/EstateNameInput'

const SearchTermInputScreen = ({ navigation }) => {
  return (
    <EstateNameInput
      navigation={navigation}
      forwoardScreen='SearchResultScreen'
      backScreen='HomeScreen'
    />
  )
}

export default SearchTermInputScreen
