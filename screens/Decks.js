import React from 'react';
import { FlatList, Vibration, Alert } from 'react-native';
import styled from 'styled-components/native'
import * as API from '../utils/api'
import * as color from '../utils/color'
import Deck from '../components/Deck'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

const FirstDeckMessage = styled.Text`
  color: #010101;
  font-size: 20;
  text-align: center;
`

const FirstDeckMessageWrapper = styled.View`
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default class Decks extends React.Component {
  handleLongPress = ({item}) => {
    Vibration.vibrate(100)
    Alert.alert(
      'Deseja excluir este deck?',
      `${item.title}`,
      [
        {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Sim, Excluir!', onPress: () => this.removeDeck({key: item.key})},
      ],
      { cancelable: false }
    )
  }
  removeDeck = ({key}) => {
    const { screenProps } = this.props
    API.removeDeck({key}).then((decks) => {
      screenProps.refreshList()
    })
  }
  render() {
    const {navigation, screenProps} = this.props
    return screenProps.decks.length ? (
      <FlatList
        data={screenProps.decks}
        renderItem={({item}) => (
          <Deck 
            questions={item.questions}
            item={item}
            onLongPress={() => this.handleLongPress({item})}
            onPress={() => navigation.navigate('Deck', {item})}>{item.title}</Deck>
        )}
      />
    ) : (
      <FirstDeckMessageWrapper>
        <FirstDeckMessage>Vamos lá!!</FirstDeckMessage>
        <FirstDeckMessage>Crie seu primeiro deck!! 🙂</FirstDeckMessage>
      </FirstDeckMessageWrapper>
    );
  }
}