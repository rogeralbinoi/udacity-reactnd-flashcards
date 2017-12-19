import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native'
import * as API from '../utils/api'
import * as color from '../utils/color'
import { Constants } from 'expo'
import AppHeader from './AppHeader'
import Deck from './Deck'
import Decks from './Decks'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

export default class Quiz extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <Text>{navigation.state.params.item.title}</Text>
    );
  }
}