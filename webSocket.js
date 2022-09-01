const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8081 })

wss.on('connection', function connection(ws) {
  console.log('Client connection')
  const interval = setInterval(() => {
    ws.send('hello world')
  }, 1000)
  ws.on('close', () => {
    console.log('Client disconnected')
  })
  ws.onerror = function () {
    console.log('Some error occurred')
  }
})