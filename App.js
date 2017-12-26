import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native'
import * as API from './utils/api'
import * as color from './utils/color'
import { Constants } from 'expo'
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
    API.getDecks().then(decks => {
      this.setState({decks: JSON.parse(decks)}) 
    })
  }
  componentDidMount() {
    this.refreshList()
  }
  render() {
    const { decks } = this.state
    const { refreshList } = this
    return (
      <View style={{flex: 1}}>
        <View style={{ backgroundColor: color.primary, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={color.primary} />
        </View>
        <View style={{flex: 1}}>
          <RootNavigator screenProps={{refreshList, decks}} />
        </View>
      </View>
    );
  }
}