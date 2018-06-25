import { normalizeChatData } from '../../data-processing/chat-messages.js'

const startState = {
  text: '',
  send: '',
  chatMsgs: []
}

const chat = (state = startState, action) => {
  switch (action.type) {
  case 'SET_MSG':
    return {
      ...state,
      text: action.text
    }
  case 'SEND_MSG':
    return {
      ...state,
      send: action.text
    }
  case 'CLEAR_SEND_MSG':
    return {
      ...state,
      send: '',
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
