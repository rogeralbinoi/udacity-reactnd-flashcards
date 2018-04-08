import * as API from '../utils/api'
export const FETCH_DECKS = 'FETCH_DECKS'

export const fetchDecks = () => {
 return dispatch => {
    API.getDecks().then(decks => {
      dispatch({ type: FETCH_DECKS, decks: JSON.parse(decks) })
    })
 }
}