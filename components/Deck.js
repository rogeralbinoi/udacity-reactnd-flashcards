import React from 'react'
import { View, Text, TouchableNativeFeedback, Alert } from 'react-native'
import styled from 'styled-components/native'
import * as API from '../utils/api'
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
  padding-bottom:  25;
`

const Deck = ({children, questions, item, ...props}) => {
  const questionsCount = questions.length || 0
  return (
    <TouchableNativeFeedback 
      background={TouchableNativeFeedback.SelectableBackground()}
      {...props}>
      <Wrapper>
        <Title>{children}</Title>
        <Count>{(!!questionsCount && `${questionsCount} ${questionsCount === 1 ? 'card' : 'cards'}`) || 'Crie seu primeiro card!! 🙂' }</Count>
      </Wrapper>
    </TouchableNativeFeedback>
  )
};

export default Deck;