const express = require('express')
const colors = require('colors')
const dotenv =  require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()

const app = express()

// Global middlewares
// Executed in order
// Try to use next as 3rd parameter and call next() in the controllers
// There can be multiple middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/plantData', require('./routes/plantDataRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))