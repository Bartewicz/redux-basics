import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Material-ui
import { RaisedButton } from 'material-ui'
import PaperRefined from '../UI/PaperRefined'
// Reducer
import { inc, dec } from '../state/counter'

const style = {
  horizontalMargin: {
    margin: '0 0.25rem'
  }
}

export default connect(
  state => ({
    counterValue: state.counter
  }),
  dispatch => ({
    onDecClick: () => dispatch(dec()),
    onIncClick: () => dispatch(inc())
  })
)(
  (props) => (
    <div>
      <PaperRefined>
        <div>
          <h1>
            {props.asyncCounterValue}
          </h1>
        </div>
      </PaperRefined>
      <PaperRefined>
        <RaisedButton
          style={style.horizontalMargin}
          secondary={true}
          label={'-'}
          onClick={props.onDecClick}
        />
        <RaisedButton
          style={style.horizontalMargin}
          primary={true}
          label={'+'}
          onClick={props.onIncClick}
        />
      </PaperRefined>
    </div>
  )
)