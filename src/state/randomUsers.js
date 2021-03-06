// Actions types
const SET_USERS_LIST = 'randomUser/SET_USERS_LIST'
const START_LOADING = 'randomUser/START_LOADING'
const STOP_LOADING = 'randomUser/STOP_LOADING'

// Actions creators
// This are functions that call for each Action
export const setUsersList = (usersList) => ({
  type: SET_USERS_LIST,
  usersList
})

export const startLoading = () => ({ type: START_LOADING })
export const stopLoading = () => ({ type: STOP_LOADING })

export const fetchUsers = () => (dispatch, getState) => {
  dispatch(startLoading())
  fetch('https://randomuser.me/api/?results=10')
    .then(r => r.json())
    .then(data => {
      dispatch(setUsersList(data.results))
      dispatch(stopLoading())
    })
}

// Initial state - state is empty by default
const initialState = {
  isDataLoading: false,
  usersList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList
      }
    case START_LOADING:
      return {
        ...state,
        isDataLoading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        isDataLoading: false
      }
    default:
      return state
  }
}