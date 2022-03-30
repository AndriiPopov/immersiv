require('dotenv').config({ path: __dirname + '/.env' })
const http = require('http')
const app = require('./app')

const { logger } = require('./src/utils/logger')

const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server)

io.sockets.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log('Received message:')
        console.log(message)
        console.log(Object.keys(io.sockets.connected).length)
        io.sockets.emit('pageview', {
            connections: Object.keys(io.sockets.connected).length - 2,
        })
    })
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => logger.info(`Magic happening on port: ${PORT}`))
