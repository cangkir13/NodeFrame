const development = {
    database: 'db_kirim',
    username: 'klink',
    password: 'klink#2015',
    host: 'dbmicroservice.cd5nlluogkde.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql' ,
  };
  
  
  const production = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || 'localhost',
    dialect:  'mysql' ,
  };
  
  module.exports = {
    development,
    production,
  };
  