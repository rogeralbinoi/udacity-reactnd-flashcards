import React from 'react';
import {View, TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components/native'
import * as API from '../utils/api'
import * as color from '../utils/color'
import { Button, Icon } from 'react-native-elements'
import Loader from '../components/Loader'

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
    return API.getDeck({key}).then(item => {
      this.setState({item})
    })
  }
  componentDidMount() {
    this.refreshDeck()
  }
  renderLoading = () => {
    return (
      <Loader />
    )
  }
  renderQuiz() {
    const { navigation, screenProps } = this.props
    const { item = {} } = this.state
    const questionsCount = (item.questions || []).length || 0
    return item && (
      <View style={{flex: 1}}>
        <DeckWrapper>
          <Title>{item.title}</Title>
          <QuestionsCount>{(!!questionsCount && `${questionsCount} ${questionsCount === 1 ? 'card' : 'cards'}`) || 'Crie seu primeiro card!! 🙂' }</QuestionsCount>
        </DeckWrapper>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            raised
            large
            icon={{name: 'plus', type: 'font-awesome', size: 15}}
            backgroundColor={color.success}
            containerViewStyle={{marginBottom: 10, flex: 1}}
            onPress={() => {navigation.navigate('NewCard', {item, refreshDeck: this.refreshDeck})}}
            title='Card' />

          <Button
            raised
            large
            icon={{name: 'play', type: 'font-awesome', size: 15}}
            disabled={!questionsCount}
            containerViewStyle={{marginBottom: 10, flex: 1}}
            backgroundColor={color.primary}
            onPress={() => {navigation.navigate('Card', {item})}}
            title='Iniciar Quiz' />
        </View>
      </View>
    )
  }
  render() {
    const { navigation, screenProps } = this.props
    const { item = {} } = this.state
    const questionsCount = (item.questions || []).length || 0
    return !screenProps.fetchedDecks && this.renderLoading() || this.renderQuiz()
  }
}