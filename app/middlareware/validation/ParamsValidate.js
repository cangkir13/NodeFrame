const Joi = require('joi')

const ParamsValidate = (schema) => {
    return (req, res, next) => { 
        const { error } = schema.validate(req.params)
        const valid = error == null; 
        // console.log( ) 
        // next()
      
        if (valid) { 
            next(); 
        } else { 
            const { details } = error; 
            const message = details.map(i => i.message).join(',');
            
            res.status(422).json({ error: message }) 
        } 
    } 
}

module.exports = ParamsValidate