const DATABASE = require('../../app/config/db.config')
const environment = process.env.NODE_ENV;
// console.log(environment)
const config = {
    listen:process.env.PORT||5600,
    dbhost:process.env.DB_HOST,
    dbuser:process.env.DB_USER,
    dbpass:process.env.DB_PASS,
    database: DATABASE(environment, false).start().then((res) => {return res})
}

module.exports = config