const express = require('express')
const {config} = require('dotenv').config()
const app = express()
app.use(express.json())s
app.post('/register', ControllerUser.register)
app.get('/data-user', verifyToken, ControllerUser.dataUser)

app.listen(process.env.PORT, () => {
  console.log(`Base URL : localhost:${process.env.PORT}`)
})