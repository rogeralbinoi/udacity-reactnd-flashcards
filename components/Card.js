import FlipCard from 'react-native-flip-card'
import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
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
  justify-content: center;
  align-items: center;

`

const CardText = styled.Text`
  color: #000;
  font-size: 30;
  text-align: center;
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

export default class Card extends Component {
  state = {
    disableCard: true
  }
  handleFlipEnd = () => {
    this.setState(({fliped}) => ({
      fliped: !fliped
    }))
    this.setState({disableCard: false})
  }
  render() {
    const {children, questions, navigation, ...props} = this.props
    const { item } = navigation.state.params
    const { disableCard, fliped } = this.state
    return (
      <Wrapper>
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
              <Title>{item.questions[0].question}</Title>
            </CardFront>
            <CardBack>
            <Title>{item.questions[0].answer}</Title>
            </CardBack>
          </FlipCard>
        </CardWrapper>
        <View style={{justifyContent: 'center', width: '100%'}}>
          <TouchableNativeFeedback disabled={disableCard} onPress={() => {navigation.navigate('AddCard')}}>
            <Btn.Outline disabled={disableCard}>
              <Btn.OutlineText>Acertei</Btn.OutlineText>
            </Btn.Outline>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback disabled={disableCard} onPress={() => {navigation.navigate('AddCard')}}>
            <Btn.Primary disabled={disableCard}>
              <Btn.PrimaryText>Errei</Btn.PrimaryText>
            </Btn.Primary>
          </TouchableNativeFeedback>
        </View>
      </Wrapper>
      )
  }
}