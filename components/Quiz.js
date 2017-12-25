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
  font-size: 24;
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
  constructor(props) {
    super(props)
    this.state = {
      item: {
        title: '',
        questions: []
      }
    }
  }
  refreshDeck = () => {
    const { key } = this.props.navigation.state.params.item
    API.getDeck({key}).then(item => {
      this.setState({item})
    })
  }
  componentDidMount() {
    this.refreshDeck()
  }
  render() {
    const { navigation } = this.props
    const { item } = this.state
    const questionsCount = item.questions.length || 0
    return item &&
      (
      <View style={{flex: 1}}>
        <DeckWrapper>
          <Title>{item.title}</Title>
          <QuestionsCount>{(!!questionsCount && `${questionsCount} ${questionsCount === 1 ? 'card' : 'cards'}`) || 'Crie seu primeiro card!! 🙂' }</QuestionsCount>
        </DeckWrapper>
        <TouchableNativeFeedback onPress={() => {navigation.navigate('AddCard', {item, refreshDeck: this.refreshDeck})}}>
          <Btn.Outline>
            <Btn.OutlineText>Adicionar Card</Btn.OutlineText>
          </Btn.Outline>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {navigation.navigate('Card', {item})}}>
          <Btn.Primary>
            <Btn.PrimaryText>Iniciar Quiz</Btn.PrimaryText>
          </Btn.Primary>
        </TouchableNativeFeedback>
      </View>
    )
  }
}