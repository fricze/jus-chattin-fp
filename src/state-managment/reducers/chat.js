const chat = (state = { text: 'na emdeku' }, action) => {
  switch (action.type) {
  case 'SEND_MSG':
    return {
      ...state,
      text: action.text
    }
  default:
    return state
  }
}

export default chat
