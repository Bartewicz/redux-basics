// Redux
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import counter from './state/counter'
import todos from './state/todos'
import header from './state/header'
import randomUsers from './state/randomUsers'
import asyncReduxCounter, { initCounterSync } from './state/asyncReduxCounter'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  // Shorter syntax for counter: counter
  counter,
  todos,
  header,
  randomUsers,
  asyncReduxCounter
})

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

store.dispatch(initCounterSync())