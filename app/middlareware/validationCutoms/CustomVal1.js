/**
 * @author lepek13
 * @description 
 * custom validation like load system administrator etc
 * @param {*} req body 
 * @param {*} res object or you can custum all
 * @param {*} next if already true
 */

module.exports = function(req, res, next) {
    
    if (req.body.num1 >=12) {
        return res.status(403).json({
            error:"id must lest then 12"
        })
    } else {
        return next()
    }   
}