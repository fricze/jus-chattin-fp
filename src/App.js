import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware, combineEpics, selectArray, select } from 'redux-most'
import { compose } from 'ramda'
import { map, fromPromise, of, from } from 'most'
import { toWebSocket } from './ws.js'
import rootReducer from './state-managment/reducers/index.js'
import { conn, socketStream } from './state-managment/sources/chat.js'
import { create } from '@most/create'

import './layout/reset.css'
import './layout/fonts.css'
import './layout/inputs.css'

import ChatView from './components/ChatView.js'
import ChatConnectionFactory from './connections/ChatConnection.js'

const receiveWsEpic = action$ => action$
  .thru(select('START_APP'))
  .chain(_ => socketStream)
  .map(value => ({
    type: 'SET_CHAT',
    value: value.data
  }))


const sendWsEpic = action$ => action$
  .thru(select('SEND_MSG'))
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

const streamOfMsgToSend = create((add) => {
  store.subscribe(() => {
    const msg = store.getState().chat.send
    add(msg)
  })

	return () => null
}).skipRepeats()
  .skipWhile(msg => msg.length === 0)
  .map(x => ({
    author: 'current author',
    msg: x
  }))
  .map(x => JSON.stringify(x))

toWebSocket(streamOfMsgToSend, conn)

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
