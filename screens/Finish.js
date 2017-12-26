import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'
import { NavigationActions } from 'react-navigation'
import * as API from '../utils/api'
import * as Btn from '../components/Btn'
import * as color from '../utils/color'

const Title = styled.Text`
  color: ${color.primaryBlack};
  font-size: 24;
  text-align: center;
`

const Count = styled.Text`
  color: #555;
  font-size: 18;
  text-align: center;
`

const Wrapper = styled.View`
  border-color: ${color.primaryBlack};
  border-width: 1;
  border-top-width: 0;
  padding-top: 25;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom:  25;
`



class Finish extends Component {
  backToDeck = () => {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }
  restartQuiz = (item) => {
    const resetAction = NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({ routeName: 'Deck', params: {item}}),
        NavigationActions.navigate({ routeName: 'Card', params: {item}})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
  render() {
      const { item, score } = this.props.navigation.state.params
      const questionsCount = item.questions.length || 0
      return (
        <Wrapper>
          <Title>{item.title}</Title>
          <Count>{`Você acertou ${score} de ${questionsCount}`}</Count>
          <View style={{justifyContent: 'center', width: 200, marginTop: 30}}>
            <TouchableNativeFeedback onPress={() => { this.restartQuiz(item) }}>
              <Btn.Outline>
                <Btn.OutlineText>Recomeçar Quiz</Btn.OutlineText>
              </Btn.Outline>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => { this.backToDeck() }}>
              <Btn.Primary>
                <Btn.PrimaryText>Voltar ao baralho</Btn.PrimaryText>
              </Btn.Primary>
            </TouchableNativeFeedback>
          </View>
        </Wrapper>
      )
    }
};

export default Finish;