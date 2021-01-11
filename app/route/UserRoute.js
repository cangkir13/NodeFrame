/**
 * @author lepek13
 * this router example with middlewares like
 * @param body params or query
 * @middleware you can create custom middleware
 * exmaple Restfull api with sequelize mysql
 */

// controller or you can call all controller with index access
// and this example with singgle controller (HOME.js controllers)
const Usercnt = require('../controllers/Users')
// schema input for middleware
const UserSchema = require('../middlareware/Schemas/UserSchema')
// validation schema input
const ValidateSchema = require('../middlareware/ValidateInput/')


const UserRoute = [
    {
        method:'get',
        path:'/user',
        middleware: null,
        controller:Usercnt.getdatauser
    },
    {
        method:'post',
        path:'/user/post',
        middleware: [ValidateSchema(UserSchema.Createuser, 'body')],
        controller:Usercnt.createData
    },
    {
        method:'put',
        path:'/user/update',
        middleware: [ValidateSchema(UserSchema.Updateuser, 'body')],
        controller:Usercnt.updateUser
    },
]

module.exports = UserRoute