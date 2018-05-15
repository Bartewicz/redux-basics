// Redux
import { createStore, combineReducers } from 'redux'
// Reducers
import counter, { inc, dec } from './state/counter'
import todos, { addTask, delTask } from './state/todos'

const reducer = combineReducers({
  // Shorter syntax for counter: counter
  counter,
  todos
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store