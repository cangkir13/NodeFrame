const axios = require('axios')
const modelUser = require('../models/').User
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

    // example get data user
    static async getdatauser(req, res){
        
        const data = await modelUser.findAll()
        return res.json({
            status:true,
            msg:"data user",
            data
        })
    }

    // example create / store data user by body-raw / form-data
    static async createData(req, res){
        
        const insert = await modelUser.create(req.body)
        return res.status(201).json({
            status:true,
            data:req.body,
            insert
        })
    }

    // example update data user by body-raw / form-data
    static async updateUser(req, res){
        const { id } = req.body
        const iduser = await modelUser.findOne({
            where:{
                id
            }
        })

        if(!iduser){
            return res.status(404).json({
                status:false,
                msg:"not found"
            })
        }

        // delete element id of req.body
        delete req.body.id
        // update data
        await modelUser.update(req.body, {
            where:{ id }
        })
        // return data
        return res.json({
            status:'ok',
            data:req.body
        })
        
    }
    

}

module.exports = Users