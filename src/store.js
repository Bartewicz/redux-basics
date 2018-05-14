// Redux
import { createStore, combineReducers } from 'redux'
// Reducers
import counter, { inc, dec } from './state/counter'

const reducer = combineReducers({
  // Shorter syntax for counter: counter
  counter
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = (number = 1) => store.dispatch(inc(number))

window.dec = (number = 1) => store.dispatch(dec(number))

export default store