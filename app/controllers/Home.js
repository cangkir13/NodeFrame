const axios = require('axios')

class Home {
    static index(req, res){
        res.send('HOME PAGE')
    }

    static sum(req, res){
        let num1 = req.params.num1
        let num2 = req.params.num2

        return res.json({
            msg:'ini page home method sum',
            data:num1 + num2
        })
    }

    static multiple(req, res){
        let num1 = req.params.num1
        let num2 = req.params.num2

        return res.json({
            msg:'ini page home method multiple',
            data:num1 * num2
        })
    }
}

// Home.allInstances = [];
// Home.allInstances.push(this);
// console.log((Home));

module.exports = Home