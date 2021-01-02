const { func } = require('joi');

module.exports = {
    Users:require('./UserSchema'),
    Foo:function (req, res, next) {
        if (req.params.id >=12) {
            return res.json({
                msg:"id must lest then 12"
            })
        }  
        next()
    },
    kurang:function (req, res, next) {
        let num1 = parseInt(req.params.num1)
        let num2 = parseInt(req.params.num2)
        
        if (num2 > num1) {
            return res.json({
                msg:"param 1 must be grather then param 2"
            })
        }
        next()
    }
}