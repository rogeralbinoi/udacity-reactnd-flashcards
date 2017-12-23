import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native'
import * as API from './utils/api'
import * as color from './utils/color'
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import AppHeader from './components/AppHeader'
import { Stack, Tabs } from './routes'
// import { setLocalNotification } from './utils/helpers'
const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

export default class App extends React.Component {
  componentDidMount() {
    // setLocalNotification()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ backgroundColor: color.primary, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={color.primary} />
        </View>
        <View style={{flex: 1}}>
          <Stack />
        </View>
      </View>
    );
  }
}