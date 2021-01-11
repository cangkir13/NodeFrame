const Joi = require('joi')

const schema = {
    Createuser:Joi.object({
        firstname:Joi.string().required(),
        lastname:Joi.string().required(),
        email:Joi.string().email({tlds:{allow:false}}).required(),
    }),
    
    Updateuser:Joi.object({
        id:Joi.number().required(),
        firstname:Joi.string().required(),
        lastname:Joi.string().required(),
        email:Joi.string().email({tlds:{allow:false}}).required(),
    }),
}

module.exports = schema