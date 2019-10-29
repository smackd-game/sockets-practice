const express = require('express')
const socket = require('socket.io')
const PORT = 4000

const app = express()
app.use(express.json())

const server = app.listen(PORT, () => console.log(`listening on ${PORT}`))

const io = socket(server)

io.on('connection', socket => {
    console.log('socket connected');
    socket.on('disconnect', function(){
        console.log('user disconnected')})


        //Global sockets
    
  socket.on('broadcast to global socket', data => {
    console.log(`global broadcast hit`)
    socket.broadcast.emit('global response',data)
  })

  socket.on('emit to global socket', data => {
    console.log('global emit hit')
    socket.emit('global response', data)
  })

  socket.on('blast to global socket', data => {
    console.log('global blast hit')
    io.sockets.emit('global response', data)
  })


        //Room sockets
    socket.on('join room', data => {
        // console.log(data)
        socket.join(data.room)
    })

})