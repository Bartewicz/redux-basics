import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Components
import AppBar from './components/AppBar'
import AsyncReduxCounter from './components/AsyncReduxCounter'
import Counter from './components/Counter'
import Header from './components/Header'
import ToDo from './components/ToDo'
import UsersList from './components/UsersList'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <AppBar />
          <Route
          exact path={'/'}
          component={AsyncReduxCounter}
          />
          <Route
          path={'/counter'}
          component={Counter}
          />
          <Route
          path={'/header'}
          component={Header}
          />
          <Route
          path={'/to-do'}
          component={ToDo}
          />
          <Route
          path={'/users-list'}
          component={UsersList}
          />
        </div>
      </Router>
    )
  }
}

export default App
