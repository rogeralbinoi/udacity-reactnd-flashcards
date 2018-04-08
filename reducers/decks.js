import { deckActions } from '../actions'
const { FETCH_DECKS } = deckActions
const initialState = {
    decks: [],
    fetched: false,
    loading: false
};

const decks = (state = initialState, action = '') => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
          ...state,
          fetched: true,
          loading: false,
          decks: action.decks
      }
    default:
      return state
  }
}

export default decks