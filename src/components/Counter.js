import React from 'react'
// Material-ui
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import PaperRefined from '../UI/PaperRefined'
// Reducer
import { inc, dec } from '../state/counter'

const style = {
  horizontalMargin: {
    margin: '0 0.25rem'
  }
}

const Counter = (props) => (
  <div>
    <PaperRefined>
      <div>
        <h1>
          {props.counterValue}
        </h1>
      </div>
    </PaperRefined>
    <PaperRefined>
      <RaisedButton
        style={style.horizontalMargin}
        secondary={true}
        label={'-'}
        onClick={props.decreaseHandler}
        />
      <RaisedButton
        style={style.horizontalMargin}
        primary={true}
        label={'+'}
        onClick={props.increaseHandler}
      />
    </PaperRefined>
  </div>
)

export default connect(
    state => ({
      counterValue: state.counter
    }),
    dispatch => ({
      decreaseHandler: () => dispatch(dec()),
      increaseHandler: () => dispatch(inc())
    })
  )(Counter)