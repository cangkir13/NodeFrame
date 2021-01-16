/**
 * @author lepek13
 * example fifebase
 */

const {getData, create} = require('../firebase/Muser')

class FireBaseCnt {

    static async index (req, res) {
        let data = await getData()
        return res.json({
            data
        })
    }

    static async postdata (req, res) {
        
        await create(req.body)

        return res.status(201).json({
            status:true,
            data:req.body
        })

    }

}


module.exports = FireBaseCnt