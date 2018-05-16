import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// Firebase
import * as firebase from './firebase'
// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Components
import store from './store'
import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'))