import React from 'react'

const MsgView = ({ msg, time }) => {
  return (
    <div key={msg + time.getTime()}>
      <div>{ time.getDate() }</div>
      <div>{ msg }</div>
    </div>
  )
}

export const MessagesView = ({ messages }) => {
  const view = messages.map(MsgView)

  return (
    <div>
      { view }
    </div>
  )
}
