const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

const helloRouter = require('./routes/hello')
const coursesRouter = require('./routes/courses')
const usersRouter = require('./routes/users')

// Middlewares
app.use(express.json())
app.use('/hello', helloRouter)
app.use('/courses', coursesRouter)
app.use('/users', usersRouter)

// DAO
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected to MongoDB.'));

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port} ...`))