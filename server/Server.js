require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const ConnectDB = require('./database/Connection')
const port = process.env.PORT
const url = process.env.MONGO_URLI


const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


app.use('/user', require('./Routes/AuthRoutes'))
app.use('/', require('./Routes/MangaRoutes'))


function Server() {
    try {
        app.listen(port, () => console.log(`Server is up and running!!`))
        ConnectDB(url)
    } catch (error) {
        console.log(error)
    }
}

Server()



