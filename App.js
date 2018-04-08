import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux'
import styled from 'styled-components/native'
import * as API from './utils/api'
import * as color from './utils/color'
import { setLocalNotification } from './utils/helpers'
import { Constants } from 'expo'
import { NavigationActions } from 'react-navigation'
import AppHeader from './components/AppHeader'
import RootNavigator from './routes'
import store from './store'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: [],
      loadingDecks: false,
      fetchedDecks: false
    }
  }
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor={color.primary}  barStyle="light-content" />
          {!!(Platform.OS !== 'ios') && (
            <View style={{ backgroundColor: color.primary, height: Constants.statusBarHeight }} />
          )}
          <View style={{flex: 1}}>
            <RootNavigator />
          </View>
        </View>
      </Provider>
    );
  }
}