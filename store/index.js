import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk,logger))
)

export default store