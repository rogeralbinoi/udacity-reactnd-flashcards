import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native'
import * as API from '../utils/api'
import * as color from '../utils/color'
import { Constants } from 'expo'
import AppHeader from './AppHeader'
import Deck from './Deck'
import Decks from './Decks'
import * as Btn from './Btn'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

const Title = styled.Text`
  margin-top: 30;
  color: ${color.primaryBlack};
  font-size: 30;
  text-align: center;
`

const QuestionsCount = styled.Text`
  color: #010101;
  font-size: 20;
  text-align: center;
`

const DeckWrapper = styled.View`
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default class Quiz extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={{flex: 1}}>
        <DeckWrapper>
          <Title>{navigation.state.params.item.title}</Title>
          <QuestionsCount>{navigation.state.params.item.questions.length || 0}</QuestionsCount>
        </DeckWrapper>
        <TouchableNativeFeedback onPress={this.saveDeck}>
          <Btn.Outline>
            <Btn.OutlineText onPress={() => {navigation.navigate('AddCard')}}>Add Card</Btn.OutlineText>
          </Btn.Outline>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.saveDeck}>
          <Btn.Primary>
            <Btn.PrimaryText>Start Quiz</Btn.PrimaryText>
          </Btn.Primary>
        </TouchableNativeFeedback>
      </View>
    );
  }
}