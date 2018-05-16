import React from 'react'
// Components
import UsersList from './components/UsersList'
import AsyncReduxCounter from './components/AsyncReduxCounter';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <AsyncReduxCounter />
      </div>
    )
  }
}

export default App
