import React from 'react'
import { RaisedButton } from 'material-ui'
import Counter from './components/Counter';

const style = {
  centered: {
    textAlign: 'center'
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={style.centered}>
        <Counter />
      </div>
    )
  }
}

export default App