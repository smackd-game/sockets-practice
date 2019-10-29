const express = require('express')
const socket = require('socket.io')
const PORT = 4000

const app = express()
app.use(express.json())

const server = app.listen(PORT, () => console.log(`listening on ${PORT}`))

const io = socket(server)

io.on('connection', socket => {
    console.log('socket connected')
})