import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const MsgView = ({ msg, time, author }) => {
  return (
    <ListItem key={msg + time.getTime()}>
      <ListItemText primary={author}
                    secondary={msg} />
    </ListItem>
  )
}

export const MessagesView = ({ messages }) => {
  const view = messages.map(MsgView)

  return (
    <List component="nav">
      { view }
    </List>
  )
}
