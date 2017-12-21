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
  margin-top: 0;
  margin-right: 20;
  margin-bottom: 0;
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

const Label = styled.Text`
  padding-left: 20;
  padding-right: 20;
  margin-top: 15;
`

export default class AddCard extends React.Component {
  saveDeck = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <KeyboardAvoidingView 
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        behavior="padding"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '100%'}}>
            <Label>Question</Label>
            <TextField
              placeholder="Your Question"
              onChangeText={(text) => this.setState({text})}
            />
            <Label>Answer</Label>
            <TextField
              placeholder="Answer"
              onChangeText={(text) => this.setState({text})}
            />
            <TouchableNativeFeedback onPress={this.saveDeck}>
              <NewButton>
                <ButtonText>Save Card</ButtonText>
              </NewButton>
            </TouchableNativeFeedback>
          </View>
      </KeyboardAvoidingView>
    );
  }
}