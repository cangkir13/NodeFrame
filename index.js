const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

const routers = require('./app/route')

/**
 * set .env as development || production
 */
require('dotenv').config()
// config
const config = require('./system/config/index');
const route = require('./app/route');

// cors 
app.use(cors())
// parsing request body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// default by route api
app.use('/api', routers)


app.listen(config.listen, () => {
    console.log(config.listen)
    // return DB
    // console.log(app._router.stack)
    // console.log(routers)
})

