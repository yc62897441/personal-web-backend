if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/index')

// 設定 cors 
const cors = require('cors')
const corsOptions = {
  origin: [
    'http://localhost:8080',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }))

// 連線總伺服器
app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
