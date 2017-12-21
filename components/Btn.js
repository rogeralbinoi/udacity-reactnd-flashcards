import react from 'react'
import styled from 'styled-components/native'
import * as color from '../utils/color'

export const PrimaryText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16;
`

export const OutlineText = styled.Text`
  color: ${color.primaryBlack};
  text-align: center;
  font-size: 16;
`

export const Primary = styled.View`
  margin-top: 5;
  margin-right: 20;
  margin-bottom: 5;
  margin-left: 20;
  padding-top: 15;
  padding-bottom: 15;
  background-color: ${color.primary};
  border-color: ${color.primary};
  border-width: 1;
`

export const Outline = styled.View`
  margin-top: 5;
  margin-right: 20;
  margin-bottom: 5;
  margin-left: 20;
  padding-top: 15;
  padding-bottom: 15;
  background-color: #fff;
  border-color: ${color.primaryBlack};
  border-width: 1;
`