// Actions types
const INC = 'counter/INC'
const DEC = 'counter/DEC'

// Actions creators
// This are functions that call for each Action
export const inc = (number = 1) => ({ type: INC, number })
export const dec = (number = 1) => ({ type: DEC, number })

// Initial state - state is empty by default
const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return state + action.number
    case DEC:
      return state - action.number
    default:
      return state
  }
}
