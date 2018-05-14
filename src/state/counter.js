// Actions types
const INC = 'counter/INC'
const DEC = 'counter/DEC'

// Actions creators
// This are functions that call for each Action
export const inc = () => ({ type: INC })
export const dec = () => ({ type: DEC })

// Initial state - state is empty by default
const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return state + 1
    case DEC:
      return state - 1
    default:
      return state
  }
}