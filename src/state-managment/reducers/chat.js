const defaultState = { text: '' }

const chat = (state = defaultState, action) => {
  switch (action.type) {
  case 'SET_MSG':
    return {
      ...state,
      text: action.text
    }
  case 'SEND_MSG':
    return state
  case 'CLEAR_SEND_MSG':
    return {
      ...state,
      text: ''
    }
  case 'SET_CHAT':
    return {
      ...state,
      chatValue: action.value
    }
  default:
    return state
  }
}

export default chat
