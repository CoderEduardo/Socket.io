const express = require("express")
const app = express()
const PORTA = 8080
const socketIO = require("socket.io")

app.listen(PORTA,()=>{
    console.log(`O servidor está rodando na porta: ${PORTA}`)
})