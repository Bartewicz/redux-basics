const OPEN = 'sideBar/OPEN'
const CLOSE = 'sideBar/CLOSE'

export const open = () => ({ type: OPEN })
export const close = () => ({ type: CLOSE })

const initialState = {
  isSideBarOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isSideBarOpen: true
      }
    case CLOSE:
      return {
        ...state,
        isSideBarOpen: false
      }
    default:
      return state
  }
}