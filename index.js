require('dotenv').config()

const path = require('path')
const express = require('express')
const userRouter = require('./routers/route')
const sequelize = require('./models/sequelize')

const app = express()
const PORT = process.env.PORT

app.set('view engine', 'ejs')
app.use(userRouter)

sequelize.authenticate().then( () => {
    console.log('connect')
}).catch((error) => {
    console.log('error')
})

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server load with port: ${PORT}`)
})