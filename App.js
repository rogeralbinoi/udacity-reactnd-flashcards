import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const Wrapper = styled.View`
    flex: 1;
    background-color: hotpink;
    align-items: center;
    justify-content: center;
`

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text style={{color: '#fff'}}>Udacity Reactnd FlashCards</Text>
      </Wrapper>
    );
  }
}
