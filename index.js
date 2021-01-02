const express = require('express')
const app = express()
const routers = require('./app/route')
const bodyParser = require('body-parser')

/**
 * set .env as development || production
 */
require('dotenv').config()
// config
const config = require('./system/config/index')


// parsing request body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// default by route api
app.use('/api', routers)


app.listen(config.listen, () => {
    console.log(config.listen)
    // return DB
})

