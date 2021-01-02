const Joi = require('joi')

const schema = {
    user:Joi.object({
        id:Joi.number().required()
    })
}

module.exports = schema