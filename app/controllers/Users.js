const axios = require('axios')

class Users {

    static async index(req, res) {
        let data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        return res.json({
            msg:'ini controller about',
            data:data.data
        })
    }

    static async show(req, res){
        let data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)       
        
        return res.json({
            msg:'ini controller about',
            data:data.data
        })
    }

    static showdata(req, res){
        let usersnews = {
            id:1,
            name:"umar"
        }
        return res.json({
            msg:"ini dengan router terpisah degan defult",
            usersnews
        })
    }
}

module.exports = Users