import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware, combineEpics, selectArray, select } from 'redux-most'
import { compose } from 'ramda'
import { map, fromPromise, of, from } from 'most'
import { periodic, scan, take, runEffects, tap } from '@most/core'
import { toWebSocket } from './ws.js'
import rootReducer from './state-managment/reducers/index.js'
import { conn, stream } from './state-managment/sources/chat.js'
import { create } from 'most-subject'

import './layout/reset.css'
import './layout/fonts.css'
import './layout/inputs.css'

import ChatView from './components/ChatView.js'
import ChatConnectionFactory from './connections/ChatConnection.js'

const receiveWsEpic = action$ => action$
  .thru(select('START_APP'))
  .chain(() => stream)
  .map(value => ({
    type: 'SET_CHAT',
    value: JSON.parse(value.data)
  }))


const sendWsEpic = action$ => action$
  .thru(select('SEND_MSG'))
  .chain(({ text }) => {
    const msg = {
      msg: text,
      author: 'RANDOM AUTHOR'
    }

    return fromPromise(toWebSocket(of(JSON.stringify(msg)), conn))
  })
  .map(_ => ({
    type: 'CLEAR_SEND_MSG'
  }))


const rootEpic = combineEpics([
  receiveWsEpic,
  sendWsEpic
])

const epicMiddleware = createEpicMiddleware(rootEpic)

const ChatConnection = ChatConnectionFactory(ChatView)

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
)

const halko = 'Oh how we chattin <3'

const App = () => (
  <Provider store={store}>
    <div>
      <header>
        <h1>{ halko }</h1>
      </header>

      <ChatConnection />
    </div>
  </Provider>
)

store.dispatch({
  type: 'START_APP'
})

export default App
