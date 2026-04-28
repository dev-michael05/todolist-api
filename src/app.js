require('dotenv').config()
const taskRoutes = require('./routes/taskRoutes')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extend: true }))

app.use('/api', taskRoutes)

app.use((req, res, next)=>{
  res.status(404).json({ erro: "endereço não encontrado" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT,() =>{
  console.log(`👉 servidor rodando em http://localhost:${PORT}`)
})