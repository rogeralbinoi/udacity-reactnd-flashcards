import { TabNavigator, StackNavigator } from 'react-navigation'
import * as color from '../utils/color'
import Deck from '../components/Deck'
import Decks from '../components/Decks'
import Quiz from '../components/Quiz'
import NewDeck from '../components/NewDeck'
import AddCard from '../components/AddCard'

export const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }
},
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: `${color.primary}`,
      style: {
        backgroundColor: color.primary
      }
    }
  }
)

export const Stack = StackNavigator({
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
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card'
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: `${color.primary}`,
      style: {
        backgroundColor: color.primary
      }
    }
  }
)