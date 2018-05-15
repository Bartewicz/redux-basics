import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Material-ui
import { RaisedButton } from 'material-ui'
import PaperRefined from '../UI/PaperRefined'
import { TextField } from 'material-ui'
// Reducer
import { addTask, delTask } from '../state/todos'

let text

const ToDo = (props) => (
  <div>
    <PaperRefined>
      <TextField
      name={'new-task'}
        onChange={(e, v) => { text = v }}
      />
    </PaperRefined>
    <PaperRefined>
      <RaisedButton
        primary={true}
        label={'Add task'}
        onClick={() => props.addTask(text) }
      />
    </PaperRefined>
    <ul>
      {
        props.tasks.map((task, index) => (
          <PaperRefined>
            <li>
              {task.task}
              <RaisedButton
                secondary={true}
                label={'Delete task'}
                onClick={() => props.delTask(index)}
              />
            </li>
          </PaperRefined>
        ))
      }
    </ul>
  </div>
)

export default connect(
  state => ({
    tasks: state.todos
  }),
  dispatch => ({
    addTask: (task) => dispatch(addTask(task)),
    delTask: (index) => dispatch(delTask(index))
  })
)(ToDo)