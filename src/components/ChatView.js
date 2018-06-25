import React from 'react'
import { ChatInput } from '../blocks/ChatInput.js'
import { connect } from 'react-redux'
import {
  MessagesView, MessagesViewComponent, ScrollToBottom
} from './MessagesView.js'

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

  const messagesView = <ScrollToBottom>
    { MessagesView({ messages }) }
  </ScrollToBottom>

  const chatInputView =
    <ChatInput value={value}
               sendMsg={sendMsg}
               setMsg={setMsg} />


  return (
    <div>
      { messagesView }
      <div style={{height: 4 * 8}}></div>
      { chatInputView }
    </div>
  )
}

export default ChatView
