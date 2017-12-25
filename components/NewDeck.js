import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  TextInput,
  Button
} from 'react-native';
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

const Title = styled.Text`
  color: ${color.primaryBlack};
  font-size: 26;
  text-align: center;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`

const TextField = styled.TextInput`
  height: 50;
  margin-top: 20;
  margin-right: 20;
  margin-bottom: 20;
  margin-left: 20;
  padding-top: 10;
  padding-bottom: 10;
  font-size: 18;
`

const NewButton = styled.View`
  margin-top: 20;
  margin-right: 20;
  margin-bottom: 20;
  margin-left: 20;
  padding-top: 15;
  padding-bottom: 15;
  background-color: ${color.primary};
`
const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16;
`

export default class NewDeck extends React.Component {
  state = {
    title: ''
  }
  saveDeck = () => {
    const {navigation, screenProps} = this.props
    API.createDeck({title: this.state.title}).then(() => {
      this.setState({title: ''})
      screenProps.refreshList()
      this.props.navigation.goBack()
    })
  }
  render() {
    return (
      <KeyboardAvoidingView 
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        behavior="padding"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Title>Qual é o título do seu novo Deck?</Title>
            <TextField
              placeholder="Ex: Alimentos em inglês"
              value={this.state.title}
              onChangeText={(text) => this.setState({title: text})}
            />
            <TouchableNativeFeedback onPress={this.saveDeck}>
              <NewButton>
                <ButtonText>Salvar Deck</ButtonText>
              </NewButton>
            </TouchableNativeFeedback>
          </View>
      </KeyboardAvoidingView>
    );
  }
}