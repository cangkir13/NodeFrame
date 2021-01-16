/**
 * @author lepek13
 * example firebase database
 */

const controller = require('../controllers/FireBaseCnt')

const FireBaseRoute = [
    {
        method:'get',
        path:'/firebase',
        middlareware:null,
        controller:controller.index
    },
    {
        method:'post',
        path:'/firebase/store',
        middlareware:null,
        controller:controller.postdata
    }
]

module.exports = FireBaseRoute