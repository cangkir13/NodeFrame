/**
 * @author lepek13
 * 
 * #module listing of routing express and midllewares
 * 
 * listing route mush be object schemas
 * 
 *   #method:"get|post|delete|etc", // this is http method
 *   #route:"/home", // path of url
 *   #middleware:[your_function(), any] or null // defalt null if not by middleware by design callback function
 *   #controller:Your_controller // by define in indexes of index.js on direcory app/controllers
 *   #desc:"option titile/ descrip of controller method", // option and not required
 */

const controllers = require('../controllers/index')
const middlewares = require('../middlareware/validation/index')
const schema = require('../middlareware/Schemas/index')

const Routes = [
    {
        method:"get",
        path:'/',
        middleware:null,
        controller:controllers.Home.index,
        desc:'Halaman utama',
    },
    {
        method:"get",
        path: "/jumlah/:num1/:num2",
        middleware:null,
        controller:controllers.Home.sum,
        desc:'Halaman utama home penjumlahan',
    },
    {
        method:"get",
        path:'/kali/:num1/:num2',
        middleware:[schema.kurang],
        controller:controllers.Home.multiple,
        desc:'Halaman utama home penjumlahan',
    },
    {
        method:"get",
        path:'/About',
        middleware:null,
        controller:controllers.About.index,
    },
    {
        method:"get",
        path:"/user",
        middleware:null,
        controller:controllers.Users.index,
    },

    {
        method:"get",
        path:"/user/arrows",
        middleware:null,
        controller:controllers.Arrowfun().index,
        desc:'controller by arrow function'
    },

    {
        method:"get",
        path:"/user/:id",
        middleware:[middlewares.Params(schema.Users.user), schema.Foo],
        controller:controllers.Users.show,
    },
]

module.exports = Routes