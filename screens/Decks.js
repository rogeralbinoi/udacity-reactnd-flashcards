import React from 'react';
import { connect } from 'react-redux'
import { FlatList, Vibration, Alert, SafeAreaView } from 'react-native';
import { deckActions } from '../actions'
import styled from 'styled-components/native'
import * as API from '../utils/api'
import * as color from '../utils/color'
import Deck from '../components/Deck'
import Loader from '../components/Loader'

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

class Decks extends React.Component {
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
    API.removeDeck({key}).then((decks) => {
      this.props.fetchDecks()
    })
  }
  componentDidMount() {
    this.props.fetchDecks()
  }
  renderDecks = () => {
    const {navigation, decks, fechedDecks} = this.props
    return decks.length ? (
      <SafeAreaView style={{flex: 1, backgroundColor: '#efefef'}}>
        <FlatList
          style={{backgroundColor: '#efefef'}}
          data={decks}
          renderItem={({item}) => (
            <Deck 
              questions={item.questions}
              item={item}
              onLongPress={() => this.handleLongPress({item})}
              onPress={() => navigation.navigate('Deck', {item})}>{item.title}</Deck>
          )}
        />
      </SafeAreaView>
    ) : (
      <FirstDeckMessageWrapper>
        <FirstDeckMessage>Vamos lá!!</FirstDeckMessage>
        <FirstDeckMessage>Crie seu primeiro deck!! 🙂</FirstDeckMessage>
      </FirstDeckMessageWrapper>
    );
  }
  renderLoading = () => {
    return (
      <Loader />
    )
  }
  render() {
    const {navigation, fetchedDecks} = this.props
    return !fetchedDecks && this.renderLoading() || this.renderDecks()
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

export default connect(mapStateToProps, mapDispatchToProps)(Decks)