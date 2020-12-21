const controllers = require('../controllers/index')

const Routes = [
    {
        method:"get",
        path:"/users",
        middleware:null,
        controller:controllers.Users.index,
    },
    {
        method:"get",
        path:"/usersnew",
        middleware:null,
        controller:controllers.Users.showdata,
    }
]

module.exports = Routes