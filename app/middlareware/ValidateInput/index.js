/**
 * @author lepek13
 * function/method middleware for params request
 * middleware for @param request validate
 * setting up route request like {params, body, query etc}
 * @param *schema* object schema input
 * @param *meta* function method
 */

const Joi = require('joi')

const index = (schema, meta) => {
    return (req, res, next) => { 
        
        if (meta === 'params' || meta === 'body' || meta === 'query'
        ) {
            const { error } = schema.validate(req[meta])
            const valid = error == null; 
                    
            if (valid) { 
                next(); 
            } else { 
                const { details } = error; 
                const message = details.map(i => i.message).join(',');
                
                return res.status(422).json({ error: message }) 
            }
        }else{

            return res.status(403).json({
                error:"schemas middlewares not verify"
            })
        }
        

    } 
}

module.exports = index