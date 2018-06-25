const startState = {
  text: '',
  chatMsgs: []
}

const normalizeChatData = messages => messages.map(
  msg => ({
    ...msg,
    time: new Date(msg.time * 1000)
  })
)

const chat = (state = startState, action) => {
  switch (action.type) {
  case 'SET_MSG':
    return {
      ...state,
      text: action.text
    }
  case 'CLEAR_SEND_MSG':
    return {
      ...state,
      text: ''
    }
  case 'SET_CHAT':
    return {
      ...state,
      chatMsgs: normalizeChatData(action.value)
    }
  default:
    return state
  }
}

export default chat
