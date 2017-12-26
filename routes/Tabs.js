import { TabNavigator } from 'react-navigation'
import Decks from '../screens/Decks'
import NewDeck from '../screens/NewDeck'
import * as color from '../utils/color'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Novo Deck',
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

export default Tabs