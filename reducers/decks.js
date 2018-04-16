import { deckActions } from '../actions'
const { FETCH_DECKS, LOAD_DECKS } = deckActions
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
    case LOAD_DECKS:
      return {
        ...state,
        fetched: false,
        loading: true
      }
    default:
      return state
  }
}

export default decks