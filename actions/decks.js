import * as API from '../utils/api'
export const FETCH_DECKS = 'FETCH_DECKS'
export const LOAD_DECKS = 'LOAD_DECKS'

export const fetchDecks = () => {
 return dispatch => {
    dispatch({type: LOAD_DECKS})
    API.getDecks().then(decks => {
      dispatch({ type: FETCH_DECKS, decks: JSON.parse(decks) })
    })
 }
}
