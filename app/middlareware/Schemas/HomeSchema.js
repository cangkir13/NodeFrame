const Joi = require('joi')

const schema = {
    HomeSum:Joi.object({
        num1:Joi.number().required(),
        num2:Joi.number().required()
    }),
}

module.exports = schema