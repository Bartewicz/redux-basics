import React from 'react'
// React-Redux
import { connect } from 'react-redux'
import { inc, dec } from '../state/asyncReduxCounter'
import { RaisedButton } from 'material-ui';

const style = {
  centered: {
    textAlign: 'center',
    width: '100%'
  },
  horizontalMargin: {
    margin: '0 0.25rem'
  }
}

export default connect(
  state => ({
    asyncCounterValue: state.asyncReduxCounter.asyncCounterValue,
  }),
  dispatch => ({
    onClickDec: () => dispatch(dec()),
    onClickInc: () => dispatch(inc())
  })
)(
  (props) => (
    !props.asyncCounterValue ?
      <div
        style={style.centered}
      >
        <h1>Czej, myśle...</h1>
      </div>
      :
      <div
        style={style.centered}
      >
        <h1>{props.asyncCounterValue}</h1>
        <RaisedButton
          style={style.horizontalMargin}
          onClick={props.onClickDec}
          secondary={true}
          label={'-'}
        />
        <RaisedButton
          style={style.horizontalMargin}
          onClick={props.onClickInc}
          primary={true}
          label={'+'}
        />
      </div>
  )
)
