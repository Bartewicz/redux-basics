// Actions types
const ADD_TASK = 'todos/ADD_TASK'
const DELETE_TASK = 'todos/DELETE_TASK'

// Actions creators
// This are functions that call for each Action
export const addTask = (task) => ({ type: ADD_TASK, task })
export const delTask = (index) => ({ type: DELETE_TASK, index })

// Initial state - state is empty by default
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return action.task ?
      state.concat({description: action.task, completed: false})
      :
      state
    case DELETE_TASK:
      return state.filter((task, index) => index !== action.index)
    default:
      return state
  }
}
