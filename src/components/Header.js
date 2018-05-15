import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Material-ui
import PaperRefined from '../UI/PaperRefined'
import { TextField } from 'material-ui'
// Reducer
import { textChangeHandler } from '../state/header'

const style = {
  center: {
    textAlign: 'center',
  }
}

const Header = (props) => (
  <div>
    <PaperRefined style={style.center}>
      <h1>{props.text}</h1>
      <TextField
        name={'new-task'}
        onChange={props.onTextChangeHandler}
        value={props.text}
      />
    </PaperRefined>
  </div>
)

export default connect(
  state => ({
    text: state.header
  }),
  dispatch => ({
    onTextChangeHandler: (event, value) => dispatch(textChangeHandler(value))
  })
)(Header)