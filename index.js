const express = require('express')
const {config} = require('dotenv').config()
const users = require('./routes/Users')
const refelections = require('./routes/Reflection')
const app = express()


app.use(express.json())

app.use('/api/v1', users)
app.use('/api/v1', refelections)


app.listen(process.env.PORT, () => {
  console.log(`Base URL : localhost:${process.env.PORT}`)
})