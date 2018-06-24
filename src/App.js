import React, { Component } from 'react'
import './App.css'
import './layout/reset.css'
import './layout/fonts.css'

import { ChatInput } from './blocks/ChatInput.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Halko w czate</h1>
        </header>

        <ChatInput></ChatInput>
      </div>
    )
  }
}

export default App
