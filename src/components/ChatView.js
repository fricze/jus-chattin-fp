import React from 'react'
import { ChatInput } from '../blocks/ChatInput.js'
import { connect } from 'react-redux'

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

  return (
    <div>
      <ChatInput value={value}
                 sendMsg={sendMsg}
                 setMsg={setMsg} />
    </div>
  )
}

export default ChatView
