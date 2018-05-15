import React from 'react'
import { Paper } from 'material-ui';

const style = {
  paper: {
    margin: '1rem',
    padding: '1rem'
  }
}

const PaperRefined = (props) => (
  <Paper style={style.paper}>
    {props.children}
  </Paper>
)

export default PaperRefined