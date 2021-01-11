/**
 * @author lepek13
 * this router example with middlewares like
 * @param body params or query
 * @middleware you can create custom middleware
 */

// controller or you can call all controller with index access
// and this example with singgle controller (HOME.js controllers)
const Homecnt = require('../controllers/Home') 
// schema input for middleware
const SchemaHome = require('../middlareware/Schemas/index')
// validation schema input
const ValidateSchema = require('../middlareware/ValidateInput/')
// customs middlewares or validation
const CustomValidate = require('../middlareware/validationCutoms/CustomVal1')

const HomeRoute = [
    {
        method:'get',
        path:'/home',
        middleware:null,
        controller:Homecnt.index
    },
    {
        method:'post',
        path:'/home/sum/:num1/:num2',
        middleware:[ValidateSchema(SchemaHome.Home_val_sum.HomeSum, 'params')],
        controller:Homecnt.sum
    },
    {
        method:'post',
        path:'/home/body',
        middleware:[ValidateSchema(SchemaHome.Home_val_sum.HomeSum, 'body')],
        controller:Homecnt.showBody
    },
    {
        method:'post',
        path:'/home/body_custom',
        middleware:[
            ValidateSchema(SchemaHome.Home_val_sum.HomeSum, 'body'),
            CustomValidate
        ],
        controller:Homecnt.showBody
    },
]

module.exports = HomeRoute