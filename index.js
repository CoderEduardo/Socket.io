const express = require("express")
const app = express()
const PORTA = 8080
const http = require("http")
const socketIO = require("socket.io")

app.use(express.static("public"))

const server = app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta: ${PORTA}`)
})

const io = socketIO(server)

io.on("connection",(socket)=>{
    console.log("Nova conexão")
    socket.emit("hello",{msg:"Sejá bem-vindo"})
    socket.on("resposta_ola",(data)=>{
        console.log(data.msg)
    })
})