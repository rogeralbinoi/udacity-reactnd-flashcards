import { StackNavigator } from 'react-navigation'
import Quiz from '../screens/Quiz'
import Card from '../screens/Card'
import NewCard from '../screens/NewCard'
import Finish from '../screens/Finish'
import Tabs from './Tabs'
import * as color from '../utils/color'

const RootNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'FlashCards',
      header: null
    }
  },
  Deck: {
    screen: Quiz,
    navigationOptions: {
      title: 'Deck',
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Novo Card',
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      title: 'Quiz',
    }
  },
  Finish: {
    screen: Finish,
    navigationOptions: {
      title: 'Fim',
    }
  }
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: color.primary,
    },
    headerTintColor: '#ffffffdd'
  }
})

export default RootNavigator