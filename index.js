const express = require('express')
const app = express()
const config = require('./system/config/')
const routers = require('./app/route')
const bodyParser = require('body-parser')
const route = require('./app/route')

// parsing request body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// console.log(process.env.NODE_ENV)
// const router = express.Router()
// console.log(router)



// default by route api
app.use('/api', routers)

app.listen(config.listen)

