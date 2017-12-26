import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'
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

const Finish = ({navigation}) => {
  const { item, score } = navigation.state.params
  const questionsCount = item.questions.length || 0
  return (
    <Wrapper>
      <Title>{item.title}</Title>
      <Count>{`Você acertou ${score} de ${questionsCount}`}</Count>
      <View style={{justifyContent: 'center', width: 200, marginTop: 30}}>
        <TouchableNativeFeedback onPress={() => { navigation.navigate('Home') }}>
          <Btn.Primary>
            <Btn.PrimaryText>Ok!</Btn.PrimaryText>
          </Btn.Primary>
        </TouchableNativeFeedback>
      </View>
    </Wrapper>
  )
};

export default Finish;