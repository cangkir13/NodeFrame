const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const controllers = {}

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
    .forEach(file => {
        const controller = require(path.join(__dirname, file))
        controllers[controller.name] = controller;
    })  

Object.values(controllers).forEach(controllerName => {
    controllers[controllerName] 
})


module.exports = controllers

/**
 *  name of object classes / arrow function
 *  module.exports = {
 *      Home:require('./Home').index,
 *      'Home-sum':require('./Home').sum,
 *      'Home-multiple':require('./Home').multiple,
 *      Userid:require('./Users').show,
 *      Arrow:require('./Arrowfun')().index,
 *  }
 */
