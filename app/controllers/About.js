const axios = require('axios')

class About {
    static  index(req, res){
        
        return res.json({
            msg:'About page'
        })
    }

}

module.exports = About