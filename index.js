require('dotenv').config()

const express = require('express')
const userRouter = require('./routers/route')

const app = express()

app.set('view engine', 'ejs')

app.use(userRouter)

app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server load with port: ${PORT}`)
})