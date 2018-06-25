import React from 'react'
import { ChatInput } from '../blocks/ChatInput.js'
import { connect } from 'react-redux'
import { MessagesView } from './MessagesView.js'

const ChatView = ({ store }) => {
  const setMsg = val => store.dispatch({
    type: 'SET_MSG',
    text: val
  })

  const sendMsg = val => store.dispatch({
    type: 'SEND_MSG',
    text: val
  })

  const value = store.chat.text
  const messages = store.chat.chatMsgs || []

  const view = MessagesView({ messages })

  return (
    <div>
      <ChatInput value={value}
                 sendMsg={sendMsg}
                 setMsg={setMsg} />
      { view }
    </div>
  )
}

export default ChatView
