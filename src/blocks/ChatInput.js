import React from 'react'

export const ChatInput = ({ value, set }) => (
  <input type="text"
         value={value}
         onChange={event => set(event.target.value)}
  />
)
