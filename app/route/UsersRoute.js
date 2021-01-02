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
    },
    {
        method:"get",
        path:"/user_model",
        middleware:null,
        controller:controllers.Users.getdatauser,
    }
]
// if nesesary adding route path
Routes.map((el) => {
    el.path = `/userPath${el.path}`
    return el
})

// console.log(Routes)

module.exports = Routes