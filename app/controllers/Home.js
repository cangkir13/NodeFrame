/**
 * example of controllers
 */

const axios = require('axios')

class Home {
    static index(req, res){
        res.send('HOME PAGE')
    }

    static sum(req, res){
        let num1 = req.params.num1
        let num2 = req.params.num2
        
        res.json({
            msg:'ini page home method sum',
            data:num1 + num2
        })
    }

    static showBody(req, res) {
        const {body} = req
        return res.json(body)
    }
}


module.exports = Home