import React from 'react';
import { 
  View,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { NavigationActions } from 'react-navigation'
import { deckActions } from '../actions'
import * as API from '../utils/api'
import * as color from '../utils/color'
import { Button, FormLabel, FormInput } from 'react-native-elements'

const Wrapper = styled.View`
  background: #fff;
  padding-bottom: 40;
`

const Title = styled.Text`
  color: ${color.primaryBlack};
  font-size: 26;
  text-align: center;
  padding-top: 20;
  padding-bottom: 20;
`

const TextField = {
  height: 50,
  marginTop: 20,
  marginBottom: 20,
  paddingTop: 10,
  paddingBottom: 10,
  fontSize: 18,
  color: '#000'
}

class NewDeck extends React.Component {
  state = {
    title: ''
  }
  saveDeck = () => {
    const {navigation} = this.props
    API.createDeck({title: this.state.title}).then((item) => {
      this.setState({title: ''})
      this.props.fetchDecks()
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'}),
          NavigationActions.navigate({ routeName: 'Deck', params: {item}}),
        ]
      })
      navigation.dispatch(resetAction)
    })
  }
  render() {
    return (
      <KeyboardAvoidingView 
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        behavior="padding"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '100%', paddingLeft: 10, paddingRight: 10}}>
            <Title>Qual é o título do seu novo Deck?</Title>
            <FormInput
              inputStyle={TextField}
              placeholder="Ex: Alimentos em inglês"
              value={this.state.title}
              onChangeText={(text) => this.setState({title: text})}
            />
            <Button
              raised
              onPress={this.saveDeck}
              backgroundColor={color.primary}
              title="Salvar Deck">
            </Button>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decks.decks,
    loadingDecks: state.decks.loading,
    fetchedDecks: state.decks.fetched
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDecks: () => {
      dispatch(deckActions.fetchDecks())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)