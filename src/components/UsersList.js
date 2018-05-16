import React from 'react'
// React-Redux
import { connect } from 'react-redux'
import { fetchUsers } from '../state/randomUsers'
import { RaisedButton } from 'material-ui'

export default connect(
  state => ({
    usersList: state.randomUsers.usersList,
    isDataLoading: state.randomUsers.isDataLoading
  }),
  dispatch => ({
    onReloadClick: () => dispatch(fetchUsers())
  })
)(
  (props) => (
    <div>
      <RaisedButton
        onClick={props.onReloadClick}
      >
        {
          props.usersList.length ?
            'Reload'
            :
            'Fetch users!'
        }
      </RaisedButton>
      {
        props.isDataLoading ?
          <div>Loading...</div>
          :
          props.usersList.map(
            (user, index) =>
              <div key={index}>
                {user.name.first} {user.name.last}
              </div>
          )
      }
    </div>
  )
)