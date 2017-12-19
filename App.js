import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native'
import * as API from './utils/api'
import * as color from './utils/color'
import { Constants } from 'expo'
import { TabNavigator } from 'react-navigation'
import AppHeader from './components/AppHeader'
import Deck from './components/Deck'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: `${color.primary}`,
    style: {
      backgroundColor: color.primary
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ backgroundColor: color.primary, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={color.primary} />
        </View>
        <Tabs />
      </View>
    );
  }
}
