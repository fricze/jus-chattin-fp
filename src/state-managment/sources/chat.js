import { fromWebSocket, toWebSocket } from 'most-w3msg'

export const wsUrl = 'ws://127.0.0.1:9899/ws'

export const conn = new WebSocket(wsUrl)

export const stream = fromWebSocket(conn, conn.close.bind(conn))
