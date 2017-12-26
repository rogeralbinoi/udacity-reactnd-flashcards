import FlipCard from 'react-native-flip-card'
import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { NavigationActions } from 'react-navigation'
import styled from 'styled-components/native'
import * as Btn from './Btn'
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

const CardFront = styled.View`
  flex: 1;
  width: 300;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`
const CardBack = styled.View`
  flex: 1;
  width: 300;
  background-color: #fff;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 10;
  justify-content: center;
  align-items: center;
`

const CardText = styled.View`
  flex: 1
`

const CardWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`

const Steps = styled.View`
  padding-top: 5;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 5;
  justify-content: space-between;
`

const Step = styled.Text`
  color: ${color.primaryBlack};
  font-size: 20;
`

export default class Card extends Component {
  state = {
    disableCard: true,
    currentQuestion: 0,
    fliped: false,
    score: 0
  }
  handleFlipEnd = (fliped) => {
    this.setState(() => {
      const disableCard = !fliped
      return {
        fliped,
        disableCard
      }
    })
  }
  nextCard = (answer) => {
    const { navigation } = this.props
    const { item } = navigation.state.params
    this.setState(({currentQuestion, score}) => {
      if(currentQuestion + 1 >= item.questions.length) {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Finish', params: {item, score: answer ? score + 1 : score}})
          ]
        })
        this.props.navigation.dispatch(resetAction)
      }
      return {
        currentQuestion: currentQuestion + 1 < item.questions.length ? currentQuestion + 1 :  currentQuestion,
        disableCard: true,
        fliped: false,
        score: answer ? score + 1 :  score
      }
    })
  }
  render() {
    const {children, questions, navigation, ...props} = this.props
    const { item } = navigation.state.params
    const { disableCard, fliped, currentQuestion, score } = this.state
    console.log('navigation', navigation)
    return (
      <Wrapper>
        <Steps>
          <Step>{`${currentQuestion + 1}/${item.questions.length || 0}`}</Step>
        </Steps>
        <CardWrapper> 
          <FlipCard 
            perspective={1000}
            friction={6}
            flipHorizontal={true}
            flipVertical={false}
            flip={fliped}
            clickable={true}
            onFlipEnd={this.handleFlipEnd}
            syle={{borderWidth: 0}}>
            <CardFront>
              <Title>{item.questions[currentQuestion].question}</Title>
            </CardFront>
            <CardBack>
              <Title>{item.questions[currentQuestion].answer}</Title>
            </CardBack>
          </FlipCard>
        </CardWrapper>
        <View style={{justifyContent: 'center', width: '100%'}}>
          <TouchableNativeFeedback disabled={disableCard} onPress={() => {this.nextCard(true)}}>
            <Btn.Outline disabled={disableCard}>
              <Btn.OutlineText>Acertei</Btn.OutlineText>
            </Btn.Outline>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback disabled={disableCard} onPress={() => {this.nextCard(false)}}>
            <Btn.Primary disabled={disableCard}>
              <Btn.PrimaryText>Errei</Btn.PrimaryText>
            </Btn.Primary>
          </TouchableNativeFeedback>
        </View>
      </Wrapper>
      )
  }
}