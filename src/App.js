import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './state-managment/reducers/index.js'
import './App.css'
import './layout/reset.css'
import './layout/fonts.css'

import Chat from './components/Chat.js'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1>Halko w czate</h1>
          </header>

          <Chat></Chat>
        </div>
      </Provider>
    )
  }
}

export default App
