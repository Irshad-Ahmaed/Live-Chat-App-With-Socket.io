const express = require('express')
const { Server } = require("socket.io")
const http = require("http")
const cors = require("cors")

const app = express()
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

app.get('/', (req, res) => {
    res.send("Socket chat BE started!")
})

io.on("connection", (socket) => {
    // console.log(socket.id);

    socket.on("joinRoom", room => socket.join(room))

    socket.on("newMessages", ({newMessages, room}) => {
        console.log(room, newMessages)
        io.in(room).emit("getLatestMessages", newMessages)
    })
});


server.listen(8000, () => console.log("app started at port 8000"))