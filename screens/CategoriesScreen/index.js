import React from 'react'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'

import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Categories from './CategoriesContainer'
import Search from '@components/SearchContainer'

const CategoriesScreen = ( { navigation } ) =>
  <Categories navigation={navigation} />

CategoriesScreen.navigationOptions = ( { navigation } ) => {
  return {
    tabBarLabel: 'Categories',
    tabBarIcon: ( { focused } ) =>
      <FontAwesome
        name={'newspaper-o'}
        size={24}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />,
    header: (
      <View style={{ backgroundColor: Colors.tintColor }}>
        <View style={{ marginTop: 24, height: 40 }}>
          <Search navigation={navigation} navOnCancel={'house'} />
        </View>
      </View>
    ),
  }
}

CategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CategoriesScreen
