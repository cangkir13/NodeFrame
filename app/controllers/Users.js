const axios = require('axios')
// const User = require('../models/Users')
// const Sequelize = require('../models')
// const Sequelize = require('sequelize')

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

    static async getdatauser(req, res){
        // console.log(User) 
        
        // const data = await User.findAll()
        console.log(data)
        return res.json('data')
    }
}

module.exports = Users