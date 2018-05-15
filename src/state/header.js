// Actions types
const TEXT_CHANGE = 'header/TEXT_CHANGE'

// Actions creators
// This are functions that call for each Action
export const textChangeHandler = (text) => ({ type: TEXT_CHANGE, text })

// Initial state - state is empty by default
const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case TEXT_CHANGE:
      return state = action.text
    default:
      return state
  }
}
