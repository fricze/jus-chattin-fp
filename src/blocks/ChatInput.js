import React from 'react'

const handleEnter = action => e => {
  if (e.key === 'Enter') {
    action(e.target.value)
  }
}

export const ChatInput = ({ value, sendMsg, setMsg }) => (
  <input type="text"
         value={value}
         onKeyPress={handleEnter(sendMsg)}
         onChange={event => setMsg(event.target.value)}
  />
)
