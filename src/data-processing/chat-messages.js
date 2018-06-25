export const normalizeChatData = messages => JSON.parse(messages).map(
  msg => ({
    ...msg,
    time: new Date(msg.time * 1000)
  })
)
