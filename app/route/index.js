const express = require('express')
const router = express.Router()

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
let routers = {};

fs.readdirSync(__dirname)
    .filter(file => {
        // ambil semua file selain index.js
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    }).forEach(( file) => {
        // ambil semua method / object dari file
        let routersm = require(path.join(__dirname, file))
        // input ke variable
        routers[file] = routersm
    })

// get values of object
let setValues = Object.values(routers)
// marger arrays
let mergedMapp = [].concat.apply([], setValues);

module.exports = mergedMapp.map((el) => {
    
    if (el.middleware == null) {
        return router[el.method](el.path, el.controller)
    }else{
        return router[el.method](el.path, el.middleware, el.controller)
    }
    
})
