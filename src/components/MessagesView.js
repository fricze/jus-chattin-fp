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

const scrollToBottom = ({ current }) => {
  if (current) {
    current.scrollTop = current.scrollHeight
  }
}

export class MessagesViewComponent extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
  }

  componentDidUpdate() {
    scrollToBottom(this.containerRef)
  }

  render() {
    return <div ref={this.containerRef} className="chat-messages">
      <MessagesView {...this.props} />
    </div>
  }
}


export class ScrollToBottom extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
  }

  componentDidUpdate() {
    scrollToBottom(this.containerRef)
  }

  render() {
    return <div ref={this.containerRef} className="chat-messages">
      { this.props.children }
    </div>
  }
}
