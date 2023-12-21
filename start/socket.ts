import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {

  socket.on('notificar', (data) => {
    socket.broadcast.emit('notificacao', data)
  })
})