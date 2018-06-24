import React from 'react'
import { ChatInput } from '../blocks/ChatInput.js'
import { connect } from 'react-redux'

const Chat = store => {
  const setMsg = val => store.dispatch({
    type: 'SEND_MSG',
    text: val
  })

  const value = store.text

  return (
    <div>
      <ChatInput value={value} set={setMsg}></ChatInput>
    </div>
  )
}

export default connect(({ chat }) => ({ chat }))(Chat)
