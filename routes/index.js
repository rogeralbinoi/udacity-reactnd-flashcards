import { StackNavigator } from 'react-navigation'
import Quiz from '../screens/Quiz'
import Card from '../screens/Card'
import NewCard from '../screens/NewCard'
import Finish from '../screens/Finish'
import Tabs from './Tabs'

const RootNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'FlashCards'
    }
  },
  Deck: {
    screen: Quiz,
    navigationOptions: {
      title: 'Deck'
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Novo Card'
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      title: 'Quiz'
    }
  },
  Finish: {
    screen: Finish,
    navigationOptions: {
      title: 'Fim'
    }
  }
})

export default RootNavigator