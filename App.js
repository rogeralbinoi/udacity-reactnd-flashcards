import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native'
import * as API from './utils/api'
import * as color from './utils/color'
import setLocalNotification from './utils/helpers'
import { Constants } from 'expo'
import { NavigationActions } from 'react-navigation'
import AppHeader from './components/AppHeader'
import RootNavigator from './routes'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: []
    }
  }
  refreshList = () => {
    return API.getDecks().then(decks => {
      this.setState({decks: JSON.parse(decks)}) 
    })
  }
  componentDidMount() {
    setLocalNotification()
  }
  newDeck = ({navigation, item}) => {
    this.refreshList().then(() => {
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'}),
          NavigationActions.navigate({ routeName: 'Deck', params: {item}}),
        ]
      })
      navigation.dispatch(resetAction)
    })
  }
  componentDidMount() {
    this.refreshList()
  }
  render() {
    const { decks } = this.state
    const { refreshList, newDeck } = this
    return (
      <View style={{flex: 1}}>
        <View style={{ backgroundColor: color.primary, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={color.primary} />
        </View>
        <View style={{flex: 1}}>
          <RootNavigator screenProps={{refreshList, newDeck, decks}} />
        </View>
      </View>
    );
  }
}