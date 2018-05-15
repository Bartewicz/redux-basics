import React from 'react'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import PaperRefined from '../UI/PaperRefined'

const style = {
  horizontalMargin: {
    margin: '0 0.25rem'
  },
  circled: {
    background: '#DDDDDD',
    display: 'flex',
    justifyContent: 'center',
    itemsAlign: 'center',
    borderRadius: '100%'
  }
}

const Counter = (props) => (
  <div>
    <PaperRefined>
      <div style={style.circled}>
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
      />
      <RaisedButton
        style={style.horizontalMargin}
        primary={true}
        label={'+'}
      />
    </PaperRefined>
  </div>
)

const mapStateToProps = state => ({
  // name of property = name of props where state would be stored
  // value = part of state that would be stored
  counterValue: state.counter
})

export default

  connect(
    mapStateToProps,
    // mapDispatchToProps
  )(Counter)