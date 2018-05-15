import React from 'react'
import ToDo from './components/ToDo';

const style = {
    textAlign: 'center',
}

class App extends React.Component {
  render() {
    return (
      <div style={style}>
        <ToDo />
      </div>
    )
  }
}

export default App