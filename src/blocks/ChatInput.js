import React from 'react'
import './ChatInput.css'

const handleEnter = action => event => {
  if (event.key === 'Enter') {
    action(event.target.value)
  }
}

const submitMsg = action => event => {
  event.preventDefault()
  action()
}

export const ChatInput = ({ value, sendMsg, setMsg }) => (
  <form onSubmit={submitMsg(_ => sendMsg(value))} className="submit-form">
    <input type="text"
           value={value}
           className="chat-input"
           onChange={event => setMsg(event.target.value)}
    />

    <input type="submit" value="Submit" className="submit-button" />
  </form>
)
