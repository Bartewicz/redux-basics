// Redux
import { createStore, combineReducers } from 'redux'
// Reducers
import counter from './state/counter'
import todos from './state/todos'
import header from './state/header'

const reducer = combineReducers({
  // Shorter syntax for counter: counter
  counter,
  todos,
  header
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store